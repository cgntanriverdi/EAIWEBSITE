import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { WorkflowData } from '@shared/schema';

const STORAGE_KEY = 'ai-commerce-workflow-draft';

const defaultWorkflowData: WorkflowData = {
  productTitle: '',
  productDetails: '',
  language: 'English',
  aiModelGender: 'auto',
  qualityLevel: 'standard',
  tonePersona: 'professional',
  imagePromptDirectives: {
    lighting: undefined,
    mood: undefined,
    cameraAngle: undefined,
    style: undefined,
  },
  variantPricing: {
    price: undefined,
    compareAtPrice: undefined,
    currency: 'USD',
  },
  publishingPlatforms: [],
  autoPublishShopify: false,
  images: [],
  productOptions: [],
  currentStep: 0,
};

interface WorkflowContextType {
  workflowData: WorkflowData;
  updateWorkflowData: (data: Partial<WorkflowData>) => void;
  resetWorkflow: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export function WorkflowProvider({ children }: { children: ReactNode }) {
  const [workflowData, setWorkflowData] = useState<WorkflowData>(defaultWorkflowData);

  const saveToLocalStorage = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(workflowData));
    } catch (error) {
      console.error('Failed to save workflow data to localStorage:', error);
    }
  }, [workflowData]);

  const loadFromLocalStorage = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setWorkflowData(parsed);
      }
    } catch (error) {
      console.error('Failed to load workflow data from localStorage:', error);
    }
  }, []);

  const updateWorkflowData = useCallback((data: Partial<WorkflowData>) => {
    setWorkflowData(prev => ({
      ...prev,
      ...data,
    }));
  }, []);

  const resetWorkflow = useCallback(() => {
    setWorkflowData(defaultWorkflowData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to remove workflow data from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  useEffect(() => {
    saveToLocalStorage();
  }, [saveToLocalStorage]);

  const value: WorkflowContextType = {
    workflowData,
    updateWorkflowData,
    resetWorkflow,
    saveToLocalStorage,
    loadFromLocalStorage,
  };

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
}

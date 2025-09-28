import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, DollarSign, Camera, Upload, Zap, Target } from "lucide-react";

export default function WorkflowVisualization() {
  const [activeMode, setActiveMode] = useState<'single' | 'full'>('full');

  const agents = [
    { icon: FileText, name: "Description", color: "bg-purple-500" },
    { icon: DollarSign, name: "Pricing", color: "bg-blue-500" },
    { icon: Camera, name: "Images", color: "bg-green-500" },
    { icon: Upload, name: "Publishing", color: "bg-orange-500" }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary" data-testid="badge-workflow">
            <Zap className="w-3 h-3 mr-1" />
            Flexible Workflow Options
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-workflow-title">
            Choose Your Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-workflow-subtitle">
            Select individual agents for specific needs or deploy our complete automation workflow for end-to-end listing optimization.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-2 border">
            <Button
              variant={activeMode === 'single' ? 'default' : 'ghost'}
              onClick={() => setActiveMode('single')}
              className="px-6"
              data-testid="button-single-agent"
            >
              <Target className="w-4 h-4 mr-2" />
              Single Agent
            </Button>
            <Button
              variant={activeMode === 'full' ? 'default' : 'ghost'}
              onClick={() => setActiveMode('full')}
              className="px-6"
              data-testid="button-full-workflow"
            >
              <Zap className="w-4 h-4 mr-2" />
              Full Workflow
            </Button>
          </div>
        </div>

        {/* Workflow Visualization */}
        <Card className="p-8 bg-gradient-to-br from-background to-card/50" data-testid="card-workflow-visualization">
          <CardContent className="p-0">
            {activeMode === 'full' ? (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-full-workflow-title">
                    Complete Automation Workflow
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-full-workflow-description">
                    End-to-end listing creation with all agents working in sequence
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {agents.map((agent, index) => (
                    <div key={agent.name} className="flex items-center">
                      <div className="relative group">
                        <div className={`w-16 h-16 rounded-2xl ${agent.color} flex items-center justify-center shadow-lg animate-float hover-elevate cursor-pointer`}
                             style={{ animationDelay: `${index * 0.2}s` }}
                             data-testid={`agent-${agent.name.toLowerCase()}`}>
                          <agent.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-muted-foreground whitespace-nowrap">
                          {agent.name}
                        </div>
                      </div>
                      
                      {index < agents.length - 1 && (
                        <ArrowRight className="w-6 h-6 text-muted-foreground mx-4 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 text-center border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2" data-testid="text-full-workflow-benefit">
                    Complete Automation • $35/listing
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid="text-full-workflow-savings">
                    Save $9 compared to individual agents • 10x faster than manual work
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-single-agent-title">
                    Individual Agent Selection
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-single-agent-description">
                    Choose specific agents based on your immediate needs
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {agents.map((agent, index) => (
                    <div key={agent.name} className="text-center">
                      <div className={`w-20 h-20 rounded-2xl ${agent.color} flex items-center justify-center shadow-lg mx-auto mb-4 hover-elevate cursor-pointer animate-stagger-up`}
                           style={{ animationDelay: `${index * 0.1}s` }}
                           onClick={() => console.log(`${agent.name} agent selected`)}
                           data-testid={`single-agent-${agent.name.toLowerCase()}`}>
                        <agent.icon className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-medium text-foreground mb-1">{agent.name}</h4>
                      <p className="text-sm text-muted-foreground">Individual use</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-card rounded-lg p-6 text-center border">
                  <h4 className="font-semibold text-foreground mb-2" data-testid="text-single-agent-benefit">
                    Pay Per Agent • $8-$15 each
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid="text-single-agent-flexibility">
                    Perfect for targeted improvements and specific workflows
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ArrowRight } from "lucide-react";

const emailSignupSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type EmailSignupData = z.infer<typeof emailSignupSchema>;

export default function EmailSignupForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<EmailSignupData>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: {
      email: ""
    }
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: EmailSignupData) => {
      const response = await apiRequest('POST', '/api/leads', data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon with updates about AI Commerce Studio."
      });
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
      form.reset();
    },
    onError: (error) => {
      console.error('Failed to submit email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact our support team.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: EmailSignupData) => {
    createLeadMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div 
        className="flex items-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
        data-testid="email-signup-success"
      >
        <div className="text-green-500 text-sm font-medium">
          ✓ Thank you! We'll be in touch soon.
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col sm:flex-row gap-3 max-w-md"
        data-testid="email-signup-form"
      >
        <div className="flex-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    className="h-12 bg-white/90 border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-md shadow-sm backdrop-blur-sm focus:border-indigo-500 focus:ring-indigo-500"
                    data-testid="input-email-signup"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>
        
        <Button
          type="submit"
          disabled={createLeadMutation.isPending}
          className="h-12 px-6 bg-gray-900 text-white hover:bg-gray-800 font-medium flex items-center gap-2 rounded-md shadow-sm transition-colors"
          data-testid="button-email-signup"
        >
          {createLeadMutation.isPending ? (
            "Starting..."
          ) : (
            <>
              Start now
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
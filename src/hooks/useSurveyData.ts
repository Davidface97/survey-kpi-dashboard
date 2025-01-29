import { useState } from "react";
import { SurveyData, SurveyResponse, WebhookPayload } from "@/types/survey";
import { useToast } from "@/components/ui/use-toast";

const WEBHOOK_ENDPOINT = '/api/webhook';

export const useSurveyData = () => {
  const [data, setData] = useState<SurveyData>({ latestResponses: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  // Function to handle incoming webhook data
  const handleWebhookData = async (webhookData: WebhookPayload) => {
    const { type, data: newData } = webhookData;

    setData(prev => {
      const latestResponse = prev.latestResponses[0] || {
        timestamp: new Date().toISOString()
      };

      // Create a new response object with the updated KPI
      const updatedResponse: SurveyResponse = {
        ...latestResponse,
        ...newData,
        timestamp: newData.timestamp || new Date().toISOString()
      };

      // Show a toast notification for the update
      toast({
        title: "Survey Update",
        description: `Received new ${type} response`,
      });

      return {
        latestResponses: [updatedResponse, ...prev.latestResponses.slice(1)].slice(0, 10)
      };
    });
  };

  return { data, isLoading, error, handleWebhookData };
};
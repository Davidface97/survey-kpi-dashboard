import { useState } from "react";
import { SurveyData, SurveyResponse } from "@/types/survey";

const WEBHOOK_ENDPOINT = '/api/webhook'; // This will be your webhook endpoint

export const useSurveyData = () => {
  const [data, setData] = useState<SurveyData>({ latestResponses: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Function to handle incoming webhook data
  const handleWebhookData = async (webhookData: SurveyResponse) => {
    setData(prev => ({
      latestResponses: [webhookData, ...prev.latestResponses].slice(0, 10) // Keep last 10 responses
    }));
  };

  return { data, isLoading, error, handleWebhookData };
};
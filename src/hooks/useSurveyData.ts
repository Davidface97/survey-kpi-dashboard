import { useEffect, useState } from "react";
import { SurveyData, SurveyResponse, WebhookPayload } from "@/types/survey";

const WEBHOOK_URL = 'wss://your-websocket-endpoint'; // Replace with your WebSocket endpoint

export const useSurveyData = () => {
  const [data, setData] = useState<SurveyData>({ latestResponses: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WEBHOOK_URL);

    ws.onopen = () => {
      console.log('WebSocket Connected');
      setIsLoading(false);
    };

    ws.onmessage = (event) => {
      try {
        const webhookData: WebhookPayload = JSON.parse(event.data);
        if (webhookData.type === 'survey_response') {
          setData(prev => ({
            latestResponses: [webhookData.data, ...prev.latestResponses].slice(0, 10) // Keep last 10 responses
          }));
        }
      } catch (err) {
        console.error('Error processing webhook data:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    };

    ws.onerror = (event) => {
      console.error('WebSocket error:', event);
      setError(new Error('WebSocket connection error'));
    };

    ws.onclose = () => {
      console.log('WebSocket Disconnected');
      setError(new Error('WebSocket connection closed'));
    };

    return () => {
      ws.close();
    };
  }, []);

  return { data, isLoading, error };
};
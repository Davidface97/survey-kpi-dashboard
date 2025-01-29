import { useQuery } from "@tanstack/react-query";
import { SurveyData } from "@/types/survey";

// This function would be replaced with your actual API call
const fetchSurveyData = async (): Promise<SurveyData> => {
  // For demo purposes, we're using a mock API endpoint
  // Replace this with your actual API endpoint
  const response = await fetch('https://your-api-endpoint/survey-data');
  if (!response.ok) {
    throw new Error('Failed to fetch survey data');
  }
  return response.json();
};

export const useSurveyData = () => {
  return useQuery({
    queryKey: ['surveyData'],
    queryFn: fetchSurveyData,
    refetchInterval: 5000, // Refetch every 5 seconds
  });
};
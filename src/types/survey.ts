export type SurveyResponseType = 'nps' | 'csat' | 'yesNo' | 'feedback' | 'callSummary';

export interface SurveyResponse {
  npsScore?: number;
  csatScore?: number;
  yesNoAnswer?: "Yes" | "No";
  openFeedback?: string;
  callSummary?: string;
  timestamp: string;
}

// Webhook payload type for individual KPI updates
export interface WebhookPayload {
  type: SurveyResponseType;
  data: Partial<SurveyResponse>;
}

export interface SurveyData {
  latestResponses: SurveyResponse[];
}
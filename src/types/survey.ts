export interface SurveyResponse {
  npsScore?: number;
  csatScore?: number;
  yesNoAnswer?: "Yes" | "No";
  openFeedback?: string;
  callSummary?: string;
  timestamp: string;
}

export interface SurveyData {
  latestResponses: SurveyResponse[];
}

// Webhook payload type
export interface WebhookPayload {
  type: 'survey_response';
  data: SurveyResponse;
}
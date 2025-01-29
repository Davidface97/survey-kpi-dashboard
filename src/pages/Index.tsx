import { NPSScore } from "@/components/NPSScore";
import { CSATScore } from "@/components/CSATScore";
import { YesNoMetric } from "@/components/YesNoMetric";
import { OpenFeedback } from "@/components/OpenFeedback";
import { CallSummary } from "@/components/CallSummary";
import { useSurveyData } from "@/hooks/useSurveyData";
import { useToast } from "@/components/ui/use-toast";
import { SurveyResponse } from "@/types/survey";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const { data, isLoading, error, handleWebhookData, resetDashboard } = useSurveyData();
  const { toast } = useToast();

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary/5 p-8 flex items-center justify-center">
        <p className="text-lg text-secondary">Loading survey data...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to fetch survey data",
    });
  }

  const latestResponse: SurveyResponse = data?.latestResponses[0] || {
    npsScore: undefined,
    csatScore: undefined,
    yesNoAnswer: undefined,
    openFeedback: undefined,
    callSummary: undefined,
    timestamp: ''
  };

  return (
    <div className="min-h-screen bg-secondary/5 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-secondary">Live Survey Responses</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary/70">
              Last updated: {new Date().toLocaleTimeString()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={resetDashboard}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Reset Dashboard
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <NPSScore score={latestResponse.npsScore} timestamp={latestResponse.timestamp} />
          </div>
          <div>
            <CSATScore score={latestResponse.csatScore} timestamp={latestResponse.timestamp} />
          </div>
          <div>
            <YesNoMetric answer={latestResponse.yesNoAnswer} timestamp={latestResponse.timestamp} />
          </div>
          <div className="lg:col-span-2">
            <OpenFeedback feedback={latestResponse.openFeedback} timestamp={latestResponse.timestamp} />
          </div>
          <div className="lg:col-span-3">
            <CallSummary summary={latestResponse.callSummary} timestamp={latestResponse.timestamp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
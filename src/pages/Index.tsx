import { NPSScore } from "@/components/NPSScore";
import { CSATScore } from "@/components/CSATScore";
import { YesNoMetric } from "@/components/YesNoMetric";
import { OpenFeedback } from "@/components/OpenFeedback";
import { CallSummary } from "@/components/CallSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/5 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-secondary">Live Survey Responses</h1>
          <span className="text-sm text-secondary/70">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <NPSScore />
          </div>
          <div>
            <CSATScore />
          </div>
          <div>
            <YesNoMetric />
          </div>
          <div className="lg:col-span-2">
            <OpenFeedback />
          </div>
          <div className="lg:col-span-3">
            <CallSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
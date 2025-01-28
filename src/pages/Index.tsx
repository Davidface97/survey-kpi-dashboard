import { NPSScore } from "@/components/NPSScore";
import { CSATScore } from "@/components/CSATScore";
import { YesNoMetric } from "@/components/YesNoMetric";
import { OpenFeedback } from "@/components/OpenFeedback";
import { CallSummary } from "@/components/CallSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Survey KPI Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NPSScore />
          </div>
          <div>
            <CSATScore />
          </div>
          <div>
            <YesNoMetric />
          </div>
          <div>
            <OpenFeedback />
          </div>
          <div className="lg:col-span-2">
            <CallSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
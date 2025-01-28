import { KPICard } from "./KPICard";

export const YesNoMetric = () => {
  const latestResponse = "Yes"; // This would be replaced with real-time data

  return (
    <KPICard title="Latest Yes/No Response">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{latestResponse}</span>
          <span className="text-sm text-gray-500">Latest Answer</span>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Last response received: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </KPICard>
  );
};
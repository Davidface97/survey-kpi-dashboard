import { KPICard } from "./KPICard";

export const CallSummary = () => {
  const latestSummary = {
    text: "Customer called about product features. Explained premium tier benefits. Customer expressed interest in upgrading.",
    timestamp: new Date().toLocaleTimeString(),
  };

  return (
    <KPICard title="Latest Call Summary">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-lg font-medium text-gray-900">{latestSummary.text}</p>
          <p className="text-sm text-gray-600 mt-2">
            Call completed at: {latestSummary.timestamp}
          </p>
        </div>
      </div>
    </KPICard>
  );
};
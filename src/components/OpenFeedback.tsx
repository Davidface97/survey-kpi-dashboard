import { KPICard } from "./KPICard";

export const OpenFeedback = () => {
  const latestFeedback = {
    text: "Great service, very helpful!",
    timestamp: new Date().toLocaleTimeString(),
  };

  return (
    <KPICard title="Latest Open Feedback">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-lg font-medium text-gray-900">{latestFeedback.text}</p>
          <p className="text-sm text-gray-600 mt-2">
            Received at: {latestFeedback.timestamp}
          </p>
        </div>
      </div>
    </KPICard>
  );
};
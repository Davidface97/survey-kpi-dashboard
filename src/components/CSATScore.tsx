import { KPICard } from "./KPICard";

export const CSATScore = () => {
  const latestScore = 4; // This would be replaced with real-time data

  return (
    <KPICard title="Latest CSAT Response">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{latestScore}/5</span>
          <span className="text-sm text-gray-500">Latest Rating</span>
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
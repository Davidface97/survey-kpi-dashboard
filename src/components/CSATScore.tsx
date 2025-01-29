import { KPICard } from "./KPICard";

interface CSATScoreProps {
  score?: number;
  timestamp?: string;
}

export const CSATScore = ({ score, timestamp }: CSATScoreProps) => {
  return (
    <KPICard title="Latest CSAT Response">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{score || '-'}/5</span>
          <span className="text-sm text-gray-500">Latest Rating</span>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Last response received: {timestamp || 'No data'}
          </p>
        </div>
      </div>
    </KPICard>
  );
};
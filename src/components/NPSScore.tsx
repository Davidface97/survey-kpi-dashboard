import { KPICard } from "./KPICard";

interface NPSScoreProps {
  score?: number;
  timestamp?: string;
}

export const NPSScore = ({ score = 0, timestamp }: NPSScoreProps) => {
  return (
    <KPICard title="Latest NPS Response">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{score}</span>
          <span className="text-sm text-gray-500">Latest Score</span>
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
import { KPICard } from "./KPICard";

interface CallSummaryProps {
  summary?: string;
  timestamp?: string;
}

export const CallSummary = ({ summary, timestamp }: CallSummaryProps) => {
  return (
    <KPICard title="Latest Call Summary">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-lg font-medium text-gray-900">{summary || 'No summary available'}</p>
          <p className="text-sm text-gray-600 mt-2">
            Call completed at: {timestamp || 'No data'}
          </p>
        </div>
      </div>
    </KPICard>
  );
};
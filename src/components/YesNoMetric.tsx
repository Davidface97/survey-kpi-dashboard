import { KPICard } from "./KPICard";

interface YesNoMetricProps {
  answer?: "Yes" | "No";
  timestamp?: string;
}

export const YesNoMetric = ({ answer, timestamp }: YesNoMetricProps) => {
  return (
    <KPICard title="Latest Yes/No Response">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{answer || '-'}</span>
          <span className="text-sm text-gray-500">Latest Answer</span>
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
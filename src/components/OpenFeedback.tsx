import { KPICard } from "./KPICard";

interface OpenFeedbackProps {
  feedback?: string;
  timestamp?: string;
}

export const OpenFeedback = ({ feedback, timestamp }: OpenFeedbackProps) => {
  return (
    <KPICard title="Latest Open Feedback">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-lg font-medium text-gray-900">{feedback || 'No feedback yet'}</p>
          <p className="text-sm text-gray-600 mt-2">
            Received at: {timestamp || 'No data'}
          </p>
        </div>
      </div>
    </KPICard>
  );
};
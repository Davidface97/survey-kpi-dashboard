import { KPICard } from "./KPICard";

const mockFeedback = [
  {
    id: 1,
    text: "The customer service was exceptional!",
    sentiment: "positive",
  },
  {
    id: 2,
    text: "Response time could be improved",
    sentiment: "neutral",
  },
  {
    id: 3,
    text: "Very satisfied with the product quality",
    sentiment: "positive",
  },
];

export const OpenFeedback = () => {
  return (
    <KPICard title="Open Feedback">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Recent Feedback</span>
        </div>
        <div className="space-y-3">
          {mockFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="p-3 bg-gray-50 rounded-lg border border-gray-100"
            >
              <p className="text-sm text-gray-600">{feedback.text}</p>
              <span
                className={`text-xs mt-2 inline-block px-2 py-1 rounded ${
                  feedback.sentiment === "positive"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {feedback.sentiment}
              </span>
            </div>
          ))}
        </div>
      </div>
    </KPICard>
  );
};
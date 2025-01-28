import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { KPICard } from "./KPICard";

const mockData = [
  { rating: "1", count: 12 },
  { rating: "2", count: 19 },
  { rating: "3", count: 33 },
  { rating: "4", count: 85 },
  { rating: "5", count: 104 },
];

export const CSATScore = () => {
  const totalResponses = mockData.reduce((acc, curr) => acc + curr.count, 0);
  const weightedSum = mockData.reduce((acc, curr) => acc + curr.count * parseInt(curr.rating), 0);
  const averageScore = (weightedSum / totalResponses).toFixed(1);

  return (
    <KPICard title="Customer Satisfaction (CSAT)">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{averageScore}</span>
          <span className="text-sm text-gray-500">Average Rating</span>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <XAxis dataKey="rating" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </KPICard>
  );
};
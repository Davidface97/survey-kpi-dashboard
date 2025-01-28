import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { KPICard } from "./KPICard";

const mockData = [
  { month: "Jan", score: 45 },
  { month: "Feb", score: 52 },
  { month: "Mar", score: 48 },
  { month: "Apr", score: 61 },
  { month: "May", score: 55 },
];

export const NPSScore = () => {
  const currentNPS = mockData[mockData.length - 1].score;

  return (
    <KPICard title="Net Promoter Score (NPS)">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{currentNPS}</span>
          <span className="text-sm text-gray-500">Last 5 months</span>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <XAxis dataKey="month" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#4F46E5"
                fill="#818CF8"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </KPICard>
  );
};
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { KPICard } from "./KPICard";

const mockData = [
  { name: "Yes", value: 745 },
  { name: "No", value: 255 },
];

const COLORS = ["#4F46E5", "#E11D48"];

export const YesNoMetric = () => {
  const total = mockData.reduce((acc, curr) => acc + curr.value, 0);
  const yesPercentage = ((mockData[0].value / total) * 100).toFixed(1);

  return (
    <KPICard title="Yes/No Responses">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-primary">{yesPercentage}%</span>
          <span className="text-sm text-gray-500">Positive Responses</span>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {mockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </KPICard>
  );
};
import { KPICard } from "./KPICard";
import { Phone, Clock, ThumbsUp } from "lucide-react";

const metrics = [
  {
    label: "Total Calls",
    value: "1,234",
    icon: Phone,
    change: "+12%",
  },
  {
    label: "Avg Duration",
    value: "8m 45s",
    icon: Clock,
    change: "-5%",
  },
  {
    label: "Resolution Rate",
    value: "94%",
    icon: ThumbsUp,
    change: "+3%",
  },
];

export const CallSummary = () => {
  return (
    <KPICard title="Call Summary">
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center p-4 bg-gray-50 rounded-lg">
            <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
            <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
            <p className="text-xl font-bold text-gray-900">{metric.value}</p>
            <span
              className={`text-sm ${
                metric.change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {metric.change}
            </span>
          </div>
        ))}
      </div>
    </KPICard>
  );
};
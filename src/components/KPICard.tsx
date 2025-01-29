import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const KPICard = ({ title, children, className }: KPICardProps) => {
  return (
    <Card className={`shadow-lg hover:shadow-xl transition-shadow bg-white border-accent/20 ${className}`}>
      <CardHeader className="bg-secondary/5">
        <CardTitle className="text-lg font-semibold text-[#0F0937]">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
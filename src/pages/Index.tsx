import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";

const Index = () => {
  const { data, loading } = useAnalyticsData();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  // Always show the dashboard, even with empty data

  return <AnalyticsDashboard data={data} />;
};

export default Index;

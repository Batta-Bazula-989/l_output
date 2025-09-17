import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CompetitorCard } from "./CompetitorCard";
import { AdAnalysisCard } from "./AdAnalysisCard";

import { CompetitorData } from "@/hooks/useAnalyticsData";
import { BarChart3, Users, Target, TrendingUp, ArrowLeft, Brain } from "lucide-react";

interface AnalyticsDashboardProps {
  data: CompetitorData[];
}

export function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorData | null>(null);

  const totalAds = data.reduce((sum, competitor) => sum + competitor.total_ads, 0);
  const totalAnalyzed = data.reduce((sum, competitor) => sum + competitor.ads_with_analysis, 0);
  const allPlatforms = [...new Set(data.flatMap(c => c.ads.flatMap(ad => ad.ad_data.platforms)))];

  if (selectedCompetitor) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setSelectedCompetitor(null)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
            <div className="flex items-center gap-4">
              <img
                src={selectedCompetitor.ads[0]?.ad_data.page_profile_picture_url}
                alt={selectedCompetitor.competitor_name}
                className="w-12 h-12 rounded-full border"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {selectedCompetitor.competitor_name}
                </h1>
                <p className="text-muted-foreground">
                  {selectedCompetitor.total_ads} ads • {selectedCompetitor.ads_with_analysis} analyzed
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {selectedCompetitor.ads.map((ad, index) => (
              <AdAnalysisCard key={index} ad={ad} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Facebook Ads Intelligence
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered competitor analysis dashboard
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Competitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Ads</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAds}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analyzed</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAnalyzed}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((totalAnalyzed / totalAds) * 100)}% completion
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platforms</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{allPlatforms.length}</div>
              <div className="flex gap-1 mt-1">
                {allPlatforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-xs">
                    {platform.toLowerCase()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Competitors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((competitor, index) => (
            <CompetitorCard
              key={index}
              competitor={competitor}
              onClick={() => setSelectedCompetitor(competitor)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
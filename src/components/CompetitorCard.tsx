import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, BarChart3, Brain, ChevronRight } from "lucide-react";

interface CompetitorData {
  competitor_name: string;
  total_ads: number;
  ads_with_analysis: number;
  ads: Array<{
    competitor_name: string;
    ad_data: {
      platforms: string[];
      page_profile_uri: string;
      page_profile_picture_url: string;
      ad_text: string;
      videos?: Array<{
        video_preview_image_url: string;
        video_sd_url: string;
      }>;
      ad_started: string;
    };
    ai_analysis: {
      full_analysis: string;
    };
  }>;
}

interface CompetitorCardProps {
  competitor: CompetitorData;
  onClick?: () => void;
}

export function CompetitorCard({ competitor, onClick }: CompetitorCardProps) {
  const completionRate = Math.round((competitor.ads_with_analysis / competitor.total_ads) * 100);

  // Get the most recent analysis excerpt
  const getAnalysisPreview = () => {
    if (competitor.ads.length === 0) return "";
    const analysis = competitor.ads[0].ai_analysis.full_analysis;
    // Extract key insights from the analysis
    const lines = analysis.split('\n').filter(line => line.trim());
    const keyInsights = lines.slice(0, 3).join(' ').substring(0, 200) + "...";
    return keyInsights;
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg font-semibold text-card-foreground">
              {competitor.competitor_name}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                <BarChart3 className="w-3 h-3 mr-1" />
                {competitor.total_ads} ads
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Users className="w-3 h-3 mr-1" />
                {competitor.ads_with_analysis} analyzed
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{completionRate}%</div>
            <div className="text-xs text-muted-foreground">analyzed</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionRate}%` }}
          />
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap gap-1">
          {[...new Set(competitor.ads.flatMap(ad => ad.ad_data.platforms))].map((platform) => (
            <Badge key={platform} variant="outline" className="text-xs">
              {platform.toLowerCase()}
            </Badge>
          ))}
        </div>

        {/* Recent ad info */}
        {competitor.ads.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            Latest: {competitor.ads[0].ad_data.ad_started}
          </div>
        )}

        {/* AI Analysis Preview */}
        {competitor.ads.length > 0 && competitor.ads[0].ai_analysis.full_analysis && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Brain className="w-4 h-4 text-primary" />
              AI Analysis Preview
            </div>
            <ScrollArea className="h-20 w-full">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {getAnalysisPreview()}
              </p>
            </ScrollArea>
          </div>
        )}

        {/* Profile link and View Details */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          {competitor.ads.length > 0 && (
            <div className="flex items-center gap-2">
              <img
                src={competitor.ads[0].ad_data.page_profile_picture_url}
                alt={competitor.competitor_name}
                className="w-6 h-6 rounded-full border"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <a
                href={competitor.ads[0].ad_data.page_profile_uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                View Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={onClick}
            className="ml-auto"
          >
            Full Analysis
            <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
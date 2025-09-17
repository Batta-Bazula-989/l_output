import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, Calendar, Play, ChevronDown, ChevronUp, Brain, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

interface AdData {
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
}

interface AdAnalysisCardProps {
  ad: AdData;
}

export function AdAnalysisCard({ ad }: AdAnalysisCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatAnalysis = (analysis: string) => {
    // Split analysis into sections and format for better readability
    const sections = analysis.split(/\d+\)\s+/).filter(Boolean);
    return sections;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                src={ad.ad_data.page_profile_picture_url}
                alt={ad.competitor_name}
                className="w-8 h-8 rounded-full border"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <CardTitle className="text-lg">{ad.competitor_name}</CardTitle>
            </div>
            <div className="flex flex-wrap gap-2">
              {ad.ad_data.platforms.map((platform) => (
                <Badge key={platform} variant="secondary" className="text-xs">
                  {platform.toLowerCase()}
                </Badge>
              ))}
              <Badge variant="outline" className="text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {ad.ad_data.ad_started}
              </Badge>
            </div>
          </div>
          <a
            href={ad.ad_data.page_profile_uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Video Preview */}
        {ad.ad_data.videos && ad.ad_data.videos.length > 0 && (
          <div className="relative">
            <img
              src={ad.ad_data.videos[0].video_preview_image_url}
              alt="Video preview"
              className="w-full h-48 object-cover rounded-lg border"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        )}

        {/* Ad Text */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
            <Target className="w-4 h-4" />
            Ad Content
          </h4>
          <ScrollArea className="h-24 w-full border rounded-md p-3">
            <p className="text-sm whitespace-pre-wrap">{ad.ad_data.ad_text}</p>
          </ScrollArea>
        </div>

        {/* AI Analysis */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                AI Analysis
              </span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-3">
            <Card className="bg-accent/20 border-accent">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Detailed Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  {formatAnalysis(ad.ai_analysis.full_analysis).map((section, index) => (
                    <div key={index} className="space-y-2">
                      <p className="whitespace-pre-wrap leading-relaxed">{section}</p>
                      {index < formatAnalysis(ad.ai_analysis.full_analysis).length - 1 && (
                        <div className="border-b border-accent/30" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
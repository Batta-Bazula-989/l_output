import { useState, useEffect } from 'react';

export interface CompetitorData {
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

export function useAnalyticsData() {
  const [data, setData] = useState<CompetitorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to update data from external source (n8n)
  const updateData = (newData: CompetitorData[]) => {
    try {
      setData(newData);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError('Failed to update data');
      console.error('Data update error:', err);
    }
  };

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch('/api/webhook');
      const result = await response.json();

      if (result.data && result.data.length > 0) {
        updateData(result.data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      if (loading) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    }
  };

  // Keep your existing URL parameter logic for smaller data
  const loadFromUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');

    if (dataParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(dataParam));
        updateData(decodedData);
        // Clean URL after loading data
        window.history.replaceState({}, document.title, window.location.pathname);
        return true; // Data loaded from URL
      } catch (err) {
        console.error('Failed to parse URL data:', err);
        setError('Invalid data format in URL');
      }
    }
    return false; // No URL data
  };

  // Keep your postMessage logic
  const handlePostMessage = (event: MessageEvent) => {
    if (event.data && event.data.type === 'ANALYTICS_DATA') {
      updateData(event.data.payload);
    }
  };

  useEffect(() => {
    // Check for data key in URL (from n8n redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const dataKey = urlParams.get('datakey');

    if (dataKey) {
      // Fetch data using the key
      fetch(`/api/data?key=${dataKey}`)
        .then(response => response.json())
        .then(result => {
          if (result.data) {
            updateData(result.data);
          }
        })
        .catch(err => {
          console.error('Failed to fetch data:', err);
          setError('Failed to load data');
          setLoading(false);
        });

      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }

    // Fallback: check URL parameters for small data
    const hasUrlData = loadFromUrlParams();

    if (!hasUrlData) {
      setLoading(false);
    }

    // Listen for postMessage events
    window.addEventListener('message', handlePostMessage);

    return () => {
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);

  return {
    data,
    loading,
    error
  };
}
// src/pages/Index.tsx
import { useState, useEffect } from 'react';
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";

const Index = () => {
  const [webhookData, setWebhookData] = useState<any>(null);
  const analyticsData = useAnalyticsData(); // Your existing hook

  useEffect(() => {
    // Check for webhook data in cookies
    const cookies = document.cookie.split(';');
    const dataCookie = cookies.find(c => c.trim().startsWith('webhookData='));

    if (dataCookie) {
      try {
        const base64Data = dataCookie.split('=')[1];
        const jsonString = atob(base64Data);
        const data = JSON.parse(jsonString);
        setWebhookData(data);

        // Clear the cookie
        document.cookie = 'webhookData=; Path=/; Max-Age=0';
      } catch (e) {
        console.error('Error parsing webhook data:', e);
      }
    }
  }, []);

  return (
    <>
      {/* Your original Analytics Dashboard */}
      <AnalyticsDashboard data={analyticsData} />

      {/* Webhook data popup - only shows when data is received */}
      {webhookData && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'white',
          border: '1px solid #ddd',
          padding: '16px',
          borderRadius: '8px',
          maxWidth: '400px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            Webhook Data Received:
          </div>
          <pre style={{
            background: '#f5f5f5',
            padding: '8px',
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '200px',
            fontSize: '12px'
          }}>
            {JSON.stringify(webhookData, null, 2)}
          </pre>
          <button
            onClick={() => setWebhookData(null)}
            style={{
              marginTop: '8px',
              padding: '6px 12px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Dismiss
          </button>
        </div>
      )}
    </>
  );
};

export default Index;
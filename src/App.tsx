// src/pages/Index.tsx
import { useState, useEffect } from 'react';

const Index = () => {
  const [webhookData, setWebhookData] = useState<any>(null);

  useEffect(() => {
    // Check for data in URL parameters
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');

    if (data) {
      try {
        const decoded = JSON.parse(decodeURIComponent(data));
        setWebhookData(decoded);
        // Clean the URL after capturing data
        window.history.replaceState({}, '', '/');
      } catch (error) {
        console.error('Failed to parse webhook data:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Webhook Data Display
        </h1>

        {webhookData ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Received Data:
            </h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(webhookData, null, 2)}
            </pre>
            <button
              onClick={() => setWebhookData(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Clear Data
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-500">
              Waiting for webhook data from n8n...
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Send a POST request to:
            </p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              https://l-output.vercel.app/api/webhook
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
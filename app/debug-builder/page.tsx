// app/debug-builder/page.tsx
"use client";

import { Builder } from "@builder.io/react";
import { useEffect, useState } from "react";

export default function DebugBuilderPage() {
  const [debugInfo, setDebugInfo] = useState({
    components: [],
    builderReady: false,
    apiKey: "",
    error: null
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const components = Builder.components || [];
        setDebugInfo({
          components,
          builderReady: true,
          apiKey: "b6ace528dbef4807913eeec6d635af5c",
          error: null
        });
        console.log("🔧 Debug info:", { components, builderReady: true });
      } catch (err) {
        setDebugInfo(prev => ({
          ...prev,
          error: err.message,
          builderReady: false
        }));
        console.error("Debug error:", err);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🔧 Builder.io Debug</h1>
      
      {/* Basic Info */}
      <div className="mb-8 bg-gray-800 p-4 rounded">
        <h2 className="text-xl font-semibold mb-4">System Status</h2>
        <div className="space-y-2">
          <p>✅ Page Loaded Successfully</p>
          <p>Builder Ready: {debugInfo.builderReady ? "✅ Yes" : "⏳ Loading..."}</p>
          <p>API Key: {debugInfo.apiKey}</p>
          <p>Site URL: https://blight-haven.vercel.app</p>
          <p>Components Found: {debugInfo.components.length}</p>
          {debugInfo.error && (
            <p className="text-red-400">❌ Error: {debugInfo.error}</p>
          )}
        </div>
      </div>

      {/* Registered Components */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Registered Components</h2>
        {debugInfo.components.length > 0 ? (
          <div className="space-y-4">
            {debugInfo.components.map((component, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded">
                <h3 className="font-semibold text-green-400">{component.name}</h3>
                <p className="text-sm text-gray-300">
                  Inputs: {component.inputs?.length || 0}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-red-900 p-4 rounded">
            <p>❌ No components registered yet</p>
            <p className="text-sm mt-2">Check browser console for errors</p>
          </div>
        )}
      </div>

      {/* Test Components */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Test Components</h2>
        <div className="space-y-4">
          {/* Test Component */}
          <div className="bg-blue-900 p-4 rounded">
            <h3>Test Component</h3>
            <p>If you can see this, the page is working correctly!</p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-yellow-900 p-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Check if components appear in the list above</li>
          <li>Go to Builder.io and set Site URL to: https://blight-haven.vercel.app</li>
          <li>In Builder editor, look for components in the Insert panel</li>
          <li>If components don't appear, refresh the Builder editor</li>
        </ol>
      </div>
    </div>
  );
}

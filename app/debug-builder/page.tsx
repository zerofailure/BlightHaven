// app/debug-builder/page.tsx
"use client";

import { Builder } from "@builder.io/react";
import { useEffect, useState } from "react";

export default function DebugBuilderPage() {
  const [components, setComponents] = useState<any[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const registeredComponents = Builder.components || [];
        setComponents(registeredComponents);
        setIsReady(true);
        console.log("Registered components:", registeredComponents);
      } catch (error) {
        console.error("Debug error:", error);
        setIsReady(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Builder.io Debug</h1>
      
      <div className="mb-6 bg-gray-800 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Status</h2>
        <p>Ready: {isReady ? "✅" : "⏳"}</p>
        <p>Components: {components.length}</p>
        <p>URL: https://blight-haven.vercel.app</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Components</h2>
        {components.length > 0 ? (
          <div className="space-y-2">
            {components.map((comp, i) => (
              <div key={i} className="bg-gray-800 p-3 rounded">
                <strong>{comp.name}</strong>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No components found</p>
        )}
      </div>

      <div className="bg-blue-900 p-4 rounded">
        <h3 className="font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal list-inside text-sm space-y-1">
          <li>Check components list above</li>
          <li>Set Builder.io Site URL to: https://blight-haven.vercel.app</li>
          <li>Look for components in Builder editor Insert panel</li>
        </ol>
      </div>
    </div>
  );
}

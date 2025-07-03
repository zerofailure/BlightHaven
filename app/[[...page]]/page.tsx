// app/[[...page]]/page.tsx
"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

export default function CatchAllBuilderPage({ params }) {
  const slug = "/" + (params?.page?.join("/") || "");
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("🔍 Fetching Builder content for slug:", slug);
    
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const content = await builder
          .get("page", { 
            userAttributes: { urlPath: slug },
            // Add timeout to prevent infinite loading
            options: { includeRefs: true }
          })
          .toPromise();
        
        console.log("📄 Builder content result:", content);
        
        if (content) {
          setContent(content);
        } else {
          console.log("❌ No content found for slug:", slug);
          setError("No content found for this page");
        }
      } catch (err) {
        console.error("❌ Error fetching Builder content:", err);
        setError("Failed to load content");
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to prevent race conditions
    const timer = setTimeout(fetchContent, 100);
    
    return () => clearTimeout(timer);
  }, [slug]);

  // Show loading state with timeout
  if (loading) {
    return (
      <div className="text-white p-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading page content...</p>
          <p className="text-sm text-gray-400 mt-2">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="text-white p-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-4">{error}</p>
          <p className="text-sm text-gray-400 mb-4">Slug: {slug}</p>
          <div className="space-y-2">
            <a href="/" className="block text-blue-400 hover:text-blue-300">
              ← Go to Home
            </a>
            <button 
              onClick={() => window.location.reload()} 
              className="block text-blue-400 hover:text-blue-300 mx-auto"
            >
              🔄 Refresh Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show content if found
  if (content) {
    return <BuilderComponent model="page" content={content} />;
  }

  // Fallback (shouldn't reach here)
  return (
    <div className="text-white p-4 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">No Content Available</h2>
        <p className="mb-4">This page exists but has no content.</p>
        <a href="/" className="text-blue-400 hover:text-blue-300">
          ← Go to Home
        </a>
      </div>
    );
}

// app/[[...page]]/page.tsx
"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

interface PageProps {
  params?: {
    page?: string[];
  };
}

export default function CatchAllBuilderPage({ params }: PageProps) {
  const slug = "/" + (params?.page?.join("/") || "");
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      try {
        console.log("Fetching content for:", slug);
        
        const result = await builder
          .get("page", { 
            userAttributes: { urlPath: slug }
          })
          .promise();
        
        if (isMounted) {
          console.log("Content result:", result);
          setContent(result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        if (isMounted) {
          setContent(null);
          setLoading(false);
        }
      }
    };

    // Add small delay to prevent race conditions
    const timer = setTimeout(fetchContent, 100);
    
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="text-white p-4 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-white p-4 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl mb-4">Page Not Found</h2>
          <p className="mb-4">No content found for: {slug}</p>
          <a href="/" className="text-blue-400 hover:text-blue-300">
            ← Go Home
          </a>
        </div>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}

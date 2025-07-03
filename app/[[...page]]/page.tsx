// app/[[...page]]/page.tsx
"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

// No need to init here anymore - it's done in builder.tsx

export default function CatchAllBuilderPage({ params }) {
  const slug = "/" + (params?.page?.join("/") || "");
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get("page", { userAttributes: { urlPath: slug } })
      .toPromise()
      .then((res) => setContent(res));
  }, [slug]);

  if (!content) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return <BuilderComponent model="page" content={content} />;
}

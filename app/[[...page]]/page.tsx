// app/[[...page]]/page.tsx
"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

// Set your public Builder.io API key
builder.init("b6ace528dbef4807913eeec6d635af5c");

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


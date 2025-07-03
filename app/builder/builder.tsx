"use client";

import { Builder, builder } from "@builder.io/react";
import { UserButton } from "@clerk/nextjs";

// Initialize Builder with your API key FIRST
builder.init("b6ace528dbef4807913eeec6d635af5c");

// Then register components
try {
  Builder.registerComponent(UserButton, {
    name: "UserButton",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fb6ace528dbef4807913eeec6d635af5c%2F8b574660eaef4221889a64a8d8407305",
    inputs: [
      {
        name: "afterSignOutUrl",
        type: "string",
        helperText: "URL to redirect to after sign out"
      },
      {
        name: "appearance",
        type: "object",
        helperText: "Appearance customization object"
      }
    ],
  });
  console.log("UserButton component registered successfully");
} catch (error) {
  console.error("Failed to register UserButton component:", error);
}

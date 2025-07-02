"use client";

import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

// Dynamically register the Clerk UserButton
Builder.registerComponent(
  dynamic(() => import("@clerk/nextjs").then((mod) => mod.UserButton)),
  {
    name: "UserButton",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb6ace528dbef4807913eeec6d635af5c%2F8b574660eaef4221889a64a8d8407305",
    inputs: [],
  }
);


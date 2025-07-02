'use client';

import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("@clerk/nextjs").then(mod => mod.UserButton)),
  {
    name: "UserButton",
    inputs: [],
    image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F2f2a6a06308044c7926d0bfb269d45e3"
  }
);
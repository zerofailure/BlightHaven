// app/builder/builder.tsx (new file)

"use client";

import { UserButton } from "@clerk/nextjs";
import { Builder } from "@builder.io/react";

Builder.registerComponent(UserButton, {
  name: "UserButton",
  inputs: [
    {
      name: "afterSignOutUrl",
      type: "string",
      defaultValue: "/",
    },
  ],
});


// builder/builder.tsx
"use client";

import { Builder, builder } from "@builder.io/react";
import { UserButton } from "@clerk/nextjs";

// Initialize Builder first
builder.init("b6ace528dbef4807913eeec6d635af5c");

// Simple wrapper component to ensure UserButton works in Builder context
const ClerkUserButtonWrapper = (props: {
  afterSignOutUrl?: string;
  showName?: boolean;
}) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <UserButton 
        afterSignOutUrl={props.afterSignOutUrl}
        showName={props.showName}
      />
    </div>
  );
};

// Register the wrapped component
Builder.registerComponent(ClerkUserButtonWrapper, {
  name: "ClerkUserButton",
  friendlyName: "Clerk User Button",
  inputs: [
    {
      name: "afterSignOutUrl",
      type: "string",
      helperText: "URL to redirect to after sign out",
      defaultValue: "/"
    },
    {
      name: "showName", 
      type: "boolean",
      helperText: "Show user's name next to avatar",
      defaultValue: false
    }
  ],
  image: "https://cdn.builder.io/api/v1/image/assets%2Fb6ace528dbef4807913eeec6d635af5c%2F8b574660eaef4221889a64a8d8407305",
  // Ensure it shows up in the component panel
  hideFromInsertMenu: false,
  canHaveChildren: false,
});

// Also register a simple test component to verify registration works
const TestComponent = () => (
  <div style={{
    padding: '16px',
    backgroundColor: '#f0f0f0',
    border: '2px solid #007bff',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#333'
  }}>
    <h3>✅ Custom Component Working!</h3>
    <p>If you can see this, custom components are registered correctly.</p>
  </div>
);

Builder.registerComponent(TestComponent, {
  name: "TestComponent",
  friendlyName: "Test Component",
  inputs: [],
});

'use client';
import { Builder } from '@builder.io/react';
import GoldDisplay from '@/components/GoldDisplay';

Builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(GoldDisplay, {
  name: 'Gold Display',
  inputs: [],         // add inputs as needed
  models: ['page', 'section'],
});

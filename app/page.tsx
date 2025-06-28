// app/page.tsx or app/(unauth)/page.tsx

'use client'

import { builder, BuilderComponent } from '@builder.io/react'
import '@builder.io/widgets/dist/lib/builder-widgets-async'

// Connect your public Builder.io API Key
builder.init('b6ace528dbef4807913eeec6d635af5c')

export default function Page() {
  return (
    <div>
      <BuilderComponent model="page" />
    </div>
  )
}

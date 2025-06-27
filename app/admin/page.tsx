import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = auth();
  if (!userId) redirect("/");

  const res = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
    headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` }
  });
  const user = await res.json();

  if (user?.username !== "zero") redirect("/");

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Admin Panel</h1>
      <p>You are logged in as zero. Future WYSIWYG controls will go here.</p>
    </main>
  );
}

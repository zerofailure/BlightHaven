import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = auth();
  if (!userId) redirect("/");

  const user = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
  }).then(res => res.json());

  if (user?.username !== "zero") {
    redirect("/");
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin Zero</h1>
      <p>This is your private WYSIWYG editor panel (coming next).</p>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";

import "./editor.css"; // Optional: for styling toolbar + editor

export default function AdminEditorPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      if (user?.username === "zero") {
        setIsAuthorized(true);
      } else {
        router.push("/");
      }
    }
  }, [isLoaded, user]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `<h1>Welcome to Blighthaven Editor</h1><p>You can start editing this page.</p>`
  });

  if (!isAuthorized) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blighthaven Visual Editor</h2>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} className="border p-4 bg-white rounded shadow" />
    </div>
  );
}

function Toolbar({ editor }: { editor: any }) {
  if (!editor) return null;

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">Bold</button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">Italic</button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="btn">Underline</button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">List</button>
      <button onClick={() => editor.chain().focus().setParagraph().run()} className="btn">Paragraph</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="btn">H1</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">H2</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="btn">H3</button>
      <button onClick={() => editor.chain().focus().setImage({ src: prompt("Image URL") || "" }).run()} className="btn">Image</button>
      <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run()} className="btn">Table</button>
    </div>
  );
}
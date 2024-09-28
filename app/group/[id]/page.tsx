"use client";

import Toolbar from "@/components/toolbar/toolbar";
import { Button, cn } from "@nextui-org/react";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Group() {
  var content = `<p>hi</p>`;
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: cn(
          "prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc focus:outline-none leading-snug"
        ),
      },
    },
    content: content,
  });

  return (
    <div className="flex flex-col mx-40 my-20">
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

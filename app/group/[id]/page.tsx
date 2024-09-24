import Editor from "@/components/editor/editor";
import Toolbar from "@/components/toolbar/toolbar";

export default function Group() {
  return (
    <div className="flex flex-col">
      <Toolbar></Toolbar>
      <Editor></Editor>
    </div>
  );
}

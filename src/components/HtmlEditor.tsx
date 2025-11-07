import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";

interface HtmlEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRefresh: () => void;
}

const HtmlEditor = ({ value, onChange, onRefresh }: HtmlEditorProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card">
        <h2 className="text-sm font-medium text-foreground">HTML Editor</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRefresh}
          className="h-8 text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Preview
        </Button>
      </div>
      <div className="flex-1 p-4">
        <Textarea
          value={localValue}
          onChange={handleChange}
          placeholder="Paste your HTML code here..."
          className="w-full h-full font-mono text-sm resize-none bg-muted border-border focus:border-primary"
        />
      </div>
    </div>
  );
};

export default HtmlEditor;

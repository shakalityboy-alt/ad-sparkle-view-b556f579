import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import HtmlEditor from "@/components/HtmlEditor";
import HtmlPreview from "@/components/HtmlPreview";
import AnimatedBackground from "@/components/AnimatedBackground";
import { toast } from "sonner";

const SAMPLE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        p {
            line-height: 1.6;
            font-size: 1.1em;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to HTML Viewer!</h1>
        <p>This is a sample HTML document. You can edit the code on the left and see the live preview here.</p>
        <p>Try adding your own HTML, CSS, and JavaScript to create amazing web content!</p>
    </div>
</body>
</html>`;

const Viewer = () => {
  const [html, setHtml] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFormat = () => {
    // Simple formatting - add indentation
    try {
      const formatted = html
        .replace(/>\s+</g, '><')
        .replace(/(<[^/][^>]*>)/g, '\n$1')
        .replace(/(<\/[^>]+>)/g, '$1\n')
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.trim())
        .join('\n');
      setHtml(formatted);
      toast.success("HTML formatted successfully!");
    } catch (error) {
      toast.error("Failed to format HTML");
    }
  };

  const handleClear = () => {
    setHtml("");
    toast.success("Editor cleared!");
  };

  const handleSample = () => {
    setHtml(SAMPLE_HTML);
    toast.success("Sample HTML loaded!");
  };

  const handleExport = () => {
    if (!html) {
      toast.error("Nothing to export!");
      return;
    }
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.html";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("HTML exported successfully!");
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".html,.htm";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          setHtml(content);
          toast.success("HTML imported successfully!");
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    toast.success("Preview refreshed!");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AnimatedBackground />
      <Sidebar
        onPreview={handleRefresh}
        onFormat={handleFormat}
        onClear={handleClear}
        onSample={handleSample}
        onExport={handleExport}
        onImport={handleImport}
      />
      <div className="flex-1 flex">
        <div className="flex-1 border-r border-border">
          <HtmlEditor value={html} onChange={setHtml} onRefresh={handleRefresh} />
        </div>
        <div className="flex-1">
          <HtmlPreview key={refreshKey} html={html} />
        </div>
      </div>
    </div>
  );
};

export default Viewer;

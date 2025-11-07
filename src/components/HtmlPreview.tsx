import { useEffect, useRef } from "react";

interface HtmlPreviewProps {
  html: string;
}

const HtmlPreview = ({ html }: HtmlPreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;
      if (document) {
        document.open();
        document.write(html || "<p style='color: #888; text-align: center; padding: 40px;'>Your HTML preview will appear here</p>");
        document.close();
      }
    }
  }, [html]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2 border-b border-border bg-card">
        <h2 className="text-sm font-medium text-foreground">Live Preview</h2>
      </div>
      <div className="flex-1 bg-white">
        <iframe
          ref={iframeRef}
          title="HTML Preview"
          className="w-full h-full border-0"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
};

export default HtmlPreview;

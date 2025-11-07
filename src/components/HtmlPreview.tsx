import { useEffect, useRef } from "react";

interface HtmlPreviewProps {
  html: string;
}

const HtmlPreview = ({ html }: HtmlPreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (iframeDoc) {
        iframeDoc.open();
        if (html && html.trim()) {
          iframeDoc.write(html);
        } else {
          iframeDoc.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body {
                    font-family: system-ui, -apple-system, sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    margin: 0;
                    color: #888;
                    text-align: center;
                    padding: 40px;
                  }
                </style>
              </head>
              <body>
                <p>Your HTML preview will appear here. Start typing in the editor!</p>
              </body>
            </html>
          `);
        }
        iframeDoc.close();
      }
    }
  }, [html]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2 border-b border-border bg-card">
        <h2 className="text-sm font-medium text-foreground">Live Preview</h2>
      </div>
      <div className="flex-1 bg-white overflow-auto">
        <iframe
          ref={iframeRef}
          title="HTML Preview"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
        />
      </div>
    </div>
  );
};

export default HtmlPreview;

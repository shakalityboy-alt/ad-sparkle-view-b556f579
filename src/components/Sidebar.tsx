import { Link, useLocation } from "react-router-dom";
import { Eye, Code, FileText, Eraser, Download, Upload, Shield, Info, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onPreview: () => void;
  onFormat: () => void;
  onClear: () => void;
  onSample: () => void;
  onExport: () => void;
  onImport: () => void;
}

const Sidebar = ({ onPreview, onFormat, onClear, onSample, onExport, onImport }: SidebarProps) => {
  const location = useLocation();

  const tools = [
    { icon: Eye, label: "Preview", onClick: onPreview },
    { icon: Code, label: "Format", onClick: onFormat },
    { icon: FileText, label: "Sample", onClick: onSample },
    { icon: Eraser, label: "Clear", onClick: onClear },
    { icon: Upload, label: "Import", onClick: onImport },
    { icon: Download, label: "Export", onClick: onExport },
  ];

  const pages = [
    { icon: Shield, label: "Privacy", path: "/privacy" },
    { icon: FileText, label: "Terms", path: "/terms" },
    { icon: Info, label: "About", path: "/about" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <aside className="w-56 bg-sidebar border-r border-border flex flex-col h-screen">
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 group">
          <Code className="w-6 h-6 text-primary" />
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
            HTML Viewer
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1 px-3">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
            Tools
          </div>
          {tools.map((tool) => (
            <button
              key={tool.label}
              onClick={tool.onClick}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground hover:bg-sidebar-accent hover:text-accent-foreground transition-colors"
            >
              <tool.icon className="w-4 h-4" />
              <span>{tool.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-1 px-3">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
            Pages
          </div>
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                location.pathname === page.path
                  ? "bg-sidebar-accent text-accent-foreground"
                  : "text-foreground hover:bg-sidebar-accent hover:text-accent-foreground"
              )}
            >
              <page.icon className="w-4 h-4" />
              <span>{page.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2025 HTML Viewer
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

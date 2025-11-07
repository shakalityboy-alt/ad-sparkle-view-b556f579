import { Link } from "react-router-dom";
import { ArrowLeft, Code, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Live Preview",
      description: "See your HTML code come to life instantly with our real-time preview feature."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Client-side processing ensures your code never leaves your browser for maximum speed and privacy."
    },
    {
      icon: Shield,
      title: "Secure",
      description: "All processing happens locally in your browser. Your code stays private and secure."
    },
    {
      icon: Sparkles,
      title: "Easy to Use",
      description: "Simple, intuitive interface designed for both beginners and professionals."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Viewer
          </Button>
        </Link>

        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">About HTML Viewer</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A powerful, modern HTML viewer and editor built for developers, designers, and content creators.
          </p>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-3">What is HTML Viewer?</h2>
              <p className="text-muted-foreground leading-relaxed">
                HTML Viewer is a free, open-source tool that allows you to write, preview, and test HTML code 
                in real-time. Whether you're learning web development, debugging HTML issues, or prototyping 
                new designs, HTML Viewer provides a fast and intuitive environment for your work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Why Choose HTML Viewer?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unlike traditional text editors or heavy IDEs, HTML Viewer is designed specifically for quick 
                HTML visualization and testing. It's perfect for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Learning HTML, CSS, and JavaScript</li>
                <li>Testing code snippets quickly</li>
                <li>Debugging HTML rendering issues</li>
                <li>Prototyping web designs</li>
                <li>Sharing HTML demos with others</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We believe that web development tools should be accessible, fast, and easy to use. HTML Viewer 
            was created to provide developers with a lightweight yet powerful tool for working with HTML code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're committed to keeping HTML Viewer free and open to everyone. Your privacy and security are 
            our top priorities, which is why all processing happens locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

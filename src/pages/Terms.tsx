import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const Terms = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Viewer
          </Button>
        </Link>

        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border">
          <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using HTML Viewer, you accept and agree to be bound by the terms and provisions 
                of this agreement. If you do not agree to these terms, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily use HTML Viewer for personal, non-commercial purposes. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                <li>Ensuring your HTML code does not violate any laws or regulations</li>
                <li>Not using the service to create malicious or harmful content</li>
                <li>Maintaining the security of your code and exports</li>
                <li>Not attempting to disrupt or interfere with the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service is provided "as is". We make no warranties, expressed or implied, and hereby disclaim 
                and negate all other warranties including, without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall HTML Viewer or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on HTML Viewer could include technical, typographical, or photographic errors. 
                We do not warrant that any of the materials are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have not reviewed all of the sites linked to our application and are not responsible for the 
                contents of any such linked site. The inclusion of any link does not imply endorsement by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may revise these terms of service at any time without notice. By using this service, you agree 
                to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws, 
                and you irrevocably submit to the exclusive jurisdiction of the courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

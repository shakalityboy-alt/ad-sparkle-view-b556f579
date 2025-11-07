import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                HTML Viewer is a client-side application that processes your HTML code locally in your browser. 
                We do not collect, store, or transmit any of your HTML code or personal data to external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Local Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your browser may temporarily store HTML code locally for the duration of your session. 
                This data is not accessible to us and is cleared when you close the application or clear your browser cache.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies only to maintain your session and preferences. We do not use tracking cookies 
                or share your data with third parties for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                This application may display advertisements through Google AdSense. Google AdSense may use cookies 
                to serve ads based on your prior visits to this site or other sites. You can opt out of personalized 
                advertising by visiting Google's Ads Settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Since all processing happens in your browser, your HTML code never leaves your device unless you 
                explicitly export or share it. We take security seriously and use industry-standard practices to 
                protect our application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete any personal information. Since we don't collect 
                personal data, there's nothing for us to access or delete. You can clear your browser data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not directed to children under 13. We do not knowingly collect personal information 
                from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us through our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact page
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

export default Privacy;

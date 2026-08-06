import { Metadata } from "next";
import Container from "@/components/layout/Container";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Jumpytools",
  description: "Get in touch with the Jumpytools team for feedback, feature requests, or bug reports.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 max-w-4xl">
      <div className="max-w-2xl mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Have a feature request, found a bug, or want to suggest a new tool? We would love to hear from you. Drop us an email or submit your message below.
        </p>
      </div>

      <hr className="border-border mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Support channels card */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <div className="flex flex-col gap-4 p-6 border border-border/80 bg-card rounded-2xl">
            <h3 className="font-bold text-foreground text-base flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email Support
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For general inquiries, business conversations, or feedback, email us directly at:
            </p>
            <a
              href="mailto:support@jumpytools.app"
              className="text-sm font-bold text-primary hover:underline mt-1"
            >
              support@jumpytools.app
            </a>
          </div>

          <div className="flex flex-col gap-4 p-6 border border-border/80 bg-card rounded-2xl">
            <h3 className="font-bold text-foreground text-base flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Feature Requests
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are constantly expanding our catalog. If there is a helper utility or formatter you need, let us know!
            </p>
          </div>
        </div>

        {/* Contact Form UI */}
        <div className="md:col-span-2 border border-border/80 bg-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground mb-6">Send a Message</h2>
          
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Alex Smith"
                  required
                  className="h-10 px-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/80 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. alex@example.com"
                  required
                  className="h-10 px-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/80 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-bold text-muted-foreground">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="e.g. Feature Suggestion / Bug Report"
                required
                className="h-10 px-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/80 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you?"
                required
                className="p-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/80 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="h-11 bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-sm rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

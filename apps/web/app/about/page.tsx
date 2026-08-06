import { Metadata } from "next";
import Container from "@/components/layout/Container";
import { ShieldCheck, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Jumpytools",
  description: "Why we built Jumpytools: simple, fast, and 100% private developer utilities that run entirely in your web browser.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 max-w-4xl">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
          About Jumpytools
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We built Jumpytools because we were tired of using slow, ad-bloated online utility sites that send your private strings, JSON configs, and images to their backend servers. 
        </p>
      </div>

      <hr className="border-border mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col gap-3 p-5 border border-border/80 bg-card rounded-2xl">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-foreground">Zero-Server Privacy</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Every tool runs completely inside your browser. Your data never leaves your machine, preventing logs or leaks of API keys, config credentials, or personal names.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-5 border border-border/80 bg-card rounded-2xl">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Zap className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-foreground">Blazing Fast</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            No API wait times, backend queues, or cold starts. Operations complete locally using web workers and vanilla JavaScript engines.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-5 border border-border/80 bg-card rounded-2xl">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-foreground">Clean & Simple</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            No pop-ups, nested redirects, or forced registrations. Just load the page, run your computation, and copy your results.
          </p>
        </div>
      </div>

      <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground mt-8">Our Mission</h2>
        <p>
          Online utility web pages have become increasingly slow and cluttered over the years. Many of them force users to download files, sit through multiple page views, or click misleading download buttons just to convert a timestamp or format a JSON string. Worse yet, pasting secure API keys, JSON payloads, or company credentials into remote formatters exposes your company to avoidable data leak risks.
        </p>
        <p>
          Jumpytools is built on a simple premise: <strong>tools should be utility-focused, private, and instant.</strong>
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Why Trust Our Tools?</h2>
        <p>
          Unlike traditional web applications that process input data on remote cloud database networks, Jumpytools is built using a modern decoupled architecture. We use pure client-side TypeScript engines. When you format JSON, generate a QR code, or convert an image format:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The script runs locally in your browser sandbox.</li>
          <li>We do not operate databases to log user utility input.</li>
          <li>For demanding tasks like image compression, our operations run client-side using browser Canvas contexts.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Who We Are</h2>
        <p>
          Jumpytools was founded by a team of independent software engineers who wanted a unified, clean suite of tools for daily tasks. Our goal is to build a comprehensive catalog of lightweight, premium utilities that stay out of your way and let you get your job done instantly.
        </p>
      </div>
    </Container>
  );
}

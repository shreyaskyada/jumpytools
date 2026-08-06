"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-card border border-border/80 shadow-lg rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground text-sm leading-tight mb-1">
              Cookie Preferences
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We use cookies to analyze site traffic, remember your preferences, and serve relevant personalized ads via Google AdSense. You can read more about how we process data in our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <button
            onClick={handleDecline}
            aria-label="Close"
            className="text-muted-foreground/60 hover:text-foreground hover:bg-muted p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 justify-end">
          <button
            onClick={handleDecline}
            className="px-3 h-8 text-xs font-semibold hover:bg-muted text-muted-foreground hover:text-foreground border border-border/80 rounded-lg transition-all cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4.5 h-8 text-xs font-bold bg-primary hover:bg-primary/95 text-primary-foreground rounded-lg transition-all cursor-pointer shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

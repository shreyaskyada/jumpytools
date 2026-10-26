'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clipboard, ShieldCheck, AlertTriangle, ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';
import { HashAlgorithmInfo } from '@repo/engines/hash-generator';

interface HashCardProps {
  info: HashAlgorithmInfo;
  hash: string;
}

export function HashCard({ info, hash }: HashCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!hash) return;
    navigator.clipboard.writeText(hash);
    setCopied(true);
    toast.success(`Copied ${info.name} hash to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = () => {
    switch (info.status) {
      case 'secure':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <ShieldCheck className="h-3 w-3" />
            {info.statusLabel}
          </span>
        );
      case 'legacy':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            <AlertTriangle className="h-3 w-3" />
            {info.statusLabel}
          </span>
        );
      case 'broken':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
            <ShieldAlert className="h-3 w-3" />
            {info.statusLabel}
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-2.5 p-4 rounded-xl border border-border bg-card hover:border-border/80 transition-all shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-foreground font-mono">{info.name}</span>
          <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-mono text-muted-foreground">
            {info.bits} bits
          </Badge>
          {getStatusBadge()}
        </div>
        <div className="flex items-center gap-2">
          {hash && (
            <span className="text-[11px] text-muted-foreground font-mono">
              {hash.length} chars
            </span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            disabled={!hash}
            className="h-7 px-2 text-xs font-medium cursor-pointer"
            title={`Copy ${info.name} hash`}
          >
            {copied ? (
              <span className="flex items-center gap-1 text-green-500">
                <Check className="h-3.5 w-3.5" />
                <span>Copied</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                <Clipboard className="h-3.5 w-3.5" />
                <span>Copy</span>
              </span>
            )}
          </Button>
        </div>
      </div>

      <div className="relative rounded-lg bg-muted/40 dark:bg-muted/20 border border-border/80 p-3 flex items-center justify-between group">
        <div className="font-mono text-xs text-foreground select-all break-all leading-relaxed">
          {hash ? hash : <span className="text-muted-foreground italic font-sans text-xs">Enter text above to generate {info.name} hash</span>}
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground leading-normal">{info.description}</p>
    </div>
  );
}

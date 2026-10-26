'use client';

import React, { useState } from 'react';
import { useHashGenerator, TOOL_METADATA, TOOL_FAQS, TOOL_ABOUT, HASH_ALGORITHMS } from '@repo/engines/hash-generator';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clipboard, Trash2, Sparkles, Shield, Lock, FileText, ArrowRightLeft } from 'lucide-react';
import { toast } from 'sonner';
import { HashCard } from './components/HashCard';

export function HashGeneratorTool() {
  const {
    state,
    setInput,
    setUppercase,
    setEncoding,
    clear,
    loadSample,
  } = useHashGenerator('Hello, Jumpytools!');

  const [copiedAll, setCopiedAll] = useState(false);

  const byteLength = new TextEncoder().encode(state.input).length;

  const handleCopyAll = () => {
    if (!state.input) {
      toast.error('No input text provided.');
      return;
    }
    const lines = HASH_ALGORITHMS.map(
      (algo) => `${algo.name}: ${state.results[algo.id]}`
    ).join('\n');
    navigator.clipboard.writeText(lines);
    setCopiedAll(true);
    toast.success('Copied all cryptographic hashes!');
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <ToolLayout
      metadata={TOOL_METADATA}
      faqs={TOOL_FAQS}
      aboutParagraphs={TOOL_ABOUT}
    >
      <div className="flex flex-col gap-6">
        {/* Main Input Card */}
        <div className="border border-border bg-card rounded-xl p-5 flex flex-col gap-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <FileText className="h-4.5 w-4.5 text-primary" />
              <h2 className="text-base font-bold text-foreground">Text Input</h2>
              {state.input && (
                <div className="flex items-center gap-1.5 ml-2">
                  <Badge variant="secondary" className="text-[11px] font-mono px-2 py-0">
                    {state.input.length.toLocaleString()} chars
                  </Badge>
                  <Badge variant="outline" className="text-[11px] font-mono px-2 py-0 text-muted-foreground">
                    {byteLength.toLocaleString()} bytes
                  </Badge>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => loadSample('Hello, Jumpytools!')}
                className="h-8 text-xs font-medium cursor-pointer"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-500" />
                Sample
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clear}
                disabled={!state.input}
                className="h-8 text-xs font-medium text-destructive hover:bg-destructive/5 cursor-pointer"
              >
                <Trash2 className="mr-1.5 h-3.5 w-3.5" />
                Clear
              </Button>
            </div>
          </div>

          {/* Textarea */}
          <div className="relative">
            <textarea
              id="hash-input-text"
              rows={4}
              value={state.input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type or paste any text string here to generate hashes in real time..."
              className="w-full resize-y rounded-lg border border-input bg-transparent p-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
            />
          </div>

          {/* Options Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex flex-wrap items-center gap-4">
              {/* Uppercase toggle */}
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-medium text-foreground hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={state.options.uppercase}
                  onChange={(e) => setUppercase(e.target.checked)}
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary cursor-pointer accent-primary"
                />
                <span>Uppercase Hex</span>
              </label>

              {/* Encoding Selector */}
              <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-lg border border-border">
                <button
                  type="button"
                  onClick={() => setEncoding('hex')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    state.options.encoding === 'hex'
                      ? 'bg-card text-foreground shadow-xs border border-border/80'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Hex
                </button>
                <button
                  type="button"
                  onClick={() => setEncoding('base64')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    state.options.encoding === 'base64'
                      ? 'bg-card text-foreground shadow-xs border border-border/80'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Base64
                </button>
              </div>
            </div>

            {/* Copy All */}
            <Button
              variant="default"
              size="sm"
              onClick={handleCopyAll}
              disabled={!state.input}
              className="h-8.5 font-semibold text-xs cursor-pointer shadow-sm active:scale-98 transition-transform"
            >
              {copiedAll ? (
                <>
                  <Check className="mr-1.5 h-3.5 w-3.5 text-green-400" />
                  Copied All
                </>
              ) : (
                <>
                  <Clipboard className="mr-1.5 h-3.5 w-3.5" />
                  Copy All Hashes
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Client-Side Security Guarantee Banner */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-800 dark:text-emerald-300 text-xs">
          <Shield className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
          <div className="flex-1">
            <span className="font-bold">100% Client-Side Privacy: </span>
            All cryptographic operations run strictly inside your browser sandbox. No input is ever transmitted over the network or saved to remote servers.
          </div>
        </div>

        {/* Hash Output Cards List */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              Generated Cryptographic Hashes
            </h3>
            <span className="text-xs text-muted-foreground font-mono">
              {HASH_ALGORITHMS.length} algorithms
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {HASH_ALGORITHMS.map((algo) => (
              <HashCard
                key={algo.id}
                info={algo}
                hash={state.results[algo.id]}
              />
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}

'use client';

import React from 'react';
import {
  useLoveCalculator,
  TOOL_METADATA,
  TOOL_FAQS,
  TOOL_ABOUT,
} from '@repo/engines/love-calculator';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Heart,
  Sparkles,
  RefreshCw,
  User,
  ShieldCheck,
  MessageCircle,
  Flame,
  Scale,
} from 'lucide-react';
import { ToolLayout } from '@/components/layout/ToolLayout';

export function LoveCalculatorTool() {
  const {
    state,
    setName1,
    setName2,
    calculate,
    clear,
  } = useLoveCalculator();

  return (
    <ToolLayout
      metadata={TOOL_METADATA}
      faqs={TOOL_FAQS}
      aboutParagraphs={TOOL_ABOUT}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Input Panel (1 col) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="border border-border/80 bg-card shadow-xs">
            <div className="px-5 py-4 border-b border-border/60 flex items-center justify-between">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <Heart className="h-4 w-4 text-pink-500 fill-pink-500 animate-pulse" />
                Calculate Compatibility
              </h3>
            </div>
            <CardContent className="p-5 flex flex-col gap-5">
              {/* Name 1 */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> Person 1
                </label>
                <Input
                  type="text"
                  value={state.name1}
                  onChange={(e) => setName1(e.target.value)}
                  placeholder="e.g. Alice"
                  className="w-full h-11 px-3"
                />
                {state.errors.name1 && (
                  <span className="text-xs text-red-500 mt-1">{state.errors.name1}</span>
                )}
              </div>

              {/* Heart Divider Icon */}
              <div className="flex justify-center -my-2">
                <div className="p-2 bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/50 rounded-full">
                  <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
                </div>
              </div>

              {/* Name 2 */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> Person 2
                </label>
                <Input
                  type="text"
                  value={state.name2}
                  onChange={(e) => setName2(e.target.value)}
                  placeholder="e.g. Bob"
                  className="w-full h-11 px-3"
                />
                {state.errors.name2 && (
                  <span className="text-xs text-red-500 mt-1">{state.errors.name2}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 mt-2">
                <button
                  onClick={calculate}
                  className="w-full h-11 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="h-4 w-4" /> Calculate Love %
                </button>
                <button
                  onClick={clear}
                  className="w-full h-11 border border-border/80 hover:bg-muted/50 text-foreground font-semibold rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Reset
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Panel (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {state.result ? (
            <>
              {/* Primary Love Score Block */}
              <div className="flex flex-col sm:flex-row items-center justify-between border border-border/80 bg-card rounded-2xl p-6 gap-6 shadow-xs">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Compatibility Results
                  </span>
                  <h2 className="text-5xl font-black text-foreground mt-1 flex items-baseline gap-1">
                    {state.result.score}%
                    <span className="text-sm font-normal text-muted-foreground ml-1">match</span>
                  </h2>
                  <span className={`text-base font-black ${state.result.categoryColor} mt-1 flex items-center justify-center sm:justify-start gap-1`}>
                    <Heart className="h-4 w-4 fill-current" /> {state.result.category}
                  </span>
                </div>

                <div className="max-w-sm border border-border/60 bg-muted/10 rounded-xl p-5 text-center sm:text-left">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                    Relationship Forecast
                  </span>
                  <span className="text-sm font-bold text-foreground leading-relaxed">
                    {state.result.message}
                  </span>
                </div>
              </div>

              {/* Progress Gauges (Breakdown) */}
              <Card className="border border-border/80 bg-card shadow-xs">
                <div className="px-5 py-4 border-b border-border/60">
                  <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <Sparkles className="h-4 w-4 text-pink-500" />
                    Compatibility Breakdown
                  </h3>
                </div>
                <CardContent className="p-6 flex flex-col gap-6">
                  {/* Trust */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" /> Trust & Loyalty
                      </span>
                      <span className="text-foreground">{state.result.breakdown.trust}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.trust}%` }}
                      />
                    </div>
                  </div>

                  {/* Communication */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <MessageCircle className="h-4 w-4 text-sky-500" /> Communication & Harmony
                      </span>
                      <span className="text-foreground">{state.result.breakdown.communication}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.communication}%` }}
                      />
                    </div>
                  </div>

                  {/* Passion */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Flame className="h-4 w-4 text-pink-500" /> Chemistry & Passion
                      </span>
                      <span className="text-foreground">{state.result.breakdown.passion}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.passion}%` }}
                      />
                    </div>
                  </div>

                  {/* Values */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Scale className="h-4 w-4 text-purple-500" /> Shared Values & Future
                      </span>
                      <span className="text-foreground">{state.result.breakdown.values}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.values}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-border/80 rounded-2xl py-16 px-4 bg-muted/5 text-center">
              <Heart className="h-10 w-10 text-pink-300 dark:text-pink-900 fill-pink-100 dark:fill-pink-950/20 mb-4 animate-bounce" />
              <h3 className="text-base font-bold text-foreground mb-1">Enter Names</h3>
              <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                Provide both names in the left-hand panel and click calculate to check your love match metrics.
              </p>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}

export default LoveCalculatorTool;

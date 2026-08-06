'use client';

import React from 'react';
import {
  useDeluluMeter,
  TOOL_METADATA,
  TOOL_FAQS,
  TOOL_ABOUT,
  QUESTIONS,
} from '@repo/engines/delulu-meter';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Sparkles,
  RefreshCw,
  Gauge,
  ShieldAlert,
  Flame,
  Scale,
  Compass,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { ToolLayout } from '@/components/layout/ToolLayout';

export function DeluluMeterTool() {
  const {
    state,
    setStatement,
    toggleQuestion,
    calculate,
    clear,
  } = useDeluluMeter();

  // Speedometer calculation
  const circumference = 251.2; // 2 * pi * r (r=40)
  const strokeDashoffset = state.result
    ? circumference - (state.result.score / 100) * circumference
    : circumference;

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
                <Gauge className="h-4 w-4 text-purple-500 animate-pulse" />
                Configure Delusion Parameters
              </h3>
            </div>
            <CardContent className="p-5 flex flex-col gap-5">
              {/* Scenario / Statement */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> What is your scenario/thought?
                </label>
                <Input
                  type="text"
                  value={state.statement}
                  onChange={(e) => setStatement(e.target.value)}
                  placeholder="e.g. He smiled at me once, we are basically married"
                  className="w-full h-11 px-3 text-sm"
                />
                {state.errors.statement && (
                  <span className="text-xs text-red-500 mt-1">{state.errors.statement}</span>
                )}
              </div>

              {/* Questions/Checks */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-muted-foreground">Select all that apply:</span>
                <div className="flex flex-col gap-2.5">
                  {QUESTIONS.map((q) => {
                    const isChecked = state.selectedQuestions.includes(q.id);
                    return (
                      <label
                        key={q.id}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-purple-500/5 border-purple-500/40 text-foreground'
                            : 'border-border/60 hover:bg-muted/50 text-muted-foreground'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleQuestion(q.id)}
                          className="mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-xs font-medium leading-tight">{q.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 mt-2">
                <button
                  onClick={calculate}
                  className="w-full h-11 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="h-4 w-4" /> Calculate Delulu %
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
              {/* Primary Delulu Score Block */}
              <div className="flex flex-col md:flex-row items-center justify-between border border-border/80 bg-card rounded-2xl p-6 gap-6 shadow-xs">
                
                {/* SVG Radial Gauge */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="40"
                        className="stroke-muted-foreground/15"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="40"
                        className="stroke-purple-500 transition-all duration-500 ease-out"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-3xl font-black text-foreground">{state.result.score}%</span>
                      <span className="block text-[10px] uppercase font-bold text-muted-foreground">delulu</span>
                    </div>
                  </div>
                  <span className={`text-base font-black ${state.result.categoryColor} mt-2 flex items-center gap-1`}>
                    <ShieldAlert className="h-4 w-4" /> {state.result.category}
                  </span>
                </div>

                <div className="flex-1 border border-border/60 bg-muted/10 rounded-xl p-5 text-center md:text-left">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                    Reality Roast & Verdict
                  </span>
                  <span className="text-sm font-bold text-foreground leading-relaxed">
                    "{state.result.message}"
                  </span>
                </div>
              </div>

              {/* Progress Gauges (Breakdown) */}
              <Card className="border border-border/80 bg-card shadow-xs">
                <div className="px-5 py-4 border-b border-border/60">
                  <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <Sparkles className="h-4 w-4 text-purple-500" />
                    Delusion Breakdown
                  </h3>
                </div>
                <CardContent className="p-6 flex flex-col gap-6">
                  {/* Reality Gap */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Compass className="h-4 w-4 text-rose-500" /> Reality Gap (Distance from Truth)
                      </span>
                      <span className="text-foreground">{state.result.breakdown.realityGap}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.realityGap}%` }}
                      />
                    </div>
                  </div>

                  {/* Denial */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <AlertCircle className="h-4 w-4 text-amber-500" /> Denial & Excuses
                      </span>
                      <span className="text-foreground">{state.result.breakdown.denial}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.denial}%` }}
                      />
                    </div>
                  </div>

                  {/* Obsession */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Eye className="h-4 w-4 text-purple-500" /> Overthinking & Obsession
                      </span>
                      <span className="text-foreground">{state.result.breakdown.obsession}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.obsession}%` }}
                      />
                    </div>
                  </div>

                  {/* Hope */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Flame className="h-4 w-4 text-emerald-500" /> Hope & Optimism
                      </span>
                      <span className="text-foreground">{state.result.breakdown.hope}%</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${state.result.breakdown.hope}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-border/80 rounded-2xl py-16 px-4 bg-muted/5 text-center">
              <Gauge className="h-10 w-10 text-purple-300 dark:text-purple-900 mb-4 animate-bounce" />
              <h3 className="text-base font-bold text-foreground mb-1">Diagnose Your Delusion</h3>
              <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                Provide your scenario in the left-hand panel and click calculate to check your diagnostic delusion parameters.
              </p>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}

export default DeluluMeterTool;

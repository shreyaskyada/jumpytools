'use client';

import React from 'react';
import {
  useFlamesGame,
  TOOL_METADATA,
  TOOL_FAQS,
  TOOL_ABOUT,
} from '@repo/engines/flames-game';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Heart,
  Sparkles,
  RefreshCw,
  User,
  Compass,
  Smile,
} from 'lucide-react';
import { ToolLayout } from '@/components/layout/ToolLayout';

export function FlamesGameTool() {
  const {
    state,
    setName1,
    setName2,
    calculate,
    clear,
  } = useFlamesGame();

  const flamesLetters: { key: 'F' | 'L' | 'A' | 'M' | 'E' | 'S'; label: string; desc: string }[] = [
    { key: 'F', label: 'Friendship', desc: 'Friends' },
    { key: 'L', label: 'Love', desc: 'Lovers' },
    { key: 'A', label: 'Affection', desc: 'Affection' },
    { key: 'M', label: 'Marriage', desc: 'Marriage' },
    { key: 'E', label: 'Enemy', desc: 'Enemies' },
    { key: 'S', label: 'Sister (Sibling)', desc: 'Sibling' },
  ];

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
                Play FLAMES Game
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
                  <Sparkles className="h-4 w-4" /> Run FLAMES Game
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
              {/* FLAMES Board */}
              <Card className="border border-border/80 bg-card shadow-xs">
                <div className="px-5 py-4 border-b border-border/60">
                  <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <Compass className="h-4 w-4 text-pink-500" />
                    FLAMES Letter Elimination
                  </h3>
                </div>
                <CardContent className="p-6 flex flex-col gap-8">
                  {/* Grid of letters */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {flamesLetters.map((item) => {
                      const isMatch = state.result?.letter === item.key;
                      return (
                        <div
                          key={item.key}
                          className={`flex flex-col items-center justify-center p-4 border rounded-2xl transition-all duration-500 relative overflow-hidden ${
                            isMatch
                              ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white border-transparent shadow-md scale-105 animate-pulse'
                              : 'bg-muted/10 text-muted-foreground border-border/60 opacity-60'
                          }`}
                        >
                          <span className="text-3xl font-black">{item.key}</span>
                          <span className="text-[10px] font-bold mt-1 text-center truncate w-full">
                            {item.desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary of elimination count */}
                  <div className="flex items-center justify-between bg-muted/20 border border-border/40 p-4 rounded-xl text-xs font-bold text-muted-foreground">
                    <span>Remaining count after letter cancellation:</span>
                    <span className="text-foreground text-sm font-black bg-background border border-border/80 px-2 py-0.5 rounded-md">
                      {state.result.remainingCount} letters
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* FLAMES Explanation card */}
              <div className="border border-border/80 bg-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    FLAMES Outcome
                  </span>
                  <h2 className="text-3xl font-black text-foreground mt-1 flex items-baseline gap-1">
                    {state.result.relationship}
                  </h2>
                  <span className={`text-base font-black ${state.result.color} mt-1 flex items-center justify-center sm:justify-start gap-1`}>
                    <Smile className="h-4 w-4" /> {state.result.meaning}
                  </span>
                </div>

                <div className="max-w-sm border border-border/60 bg-muted/10 rounded-xl p-5 text-center sm:text-left">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                    Game Insight
                  </span>
                  <span className="text-sm font-medium text-muted-foreground leading-relaxed block">
                    {state.result.description}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-border/80 rounded-2xl py-16 px-4 bg-muted/5 text-center">
              <Heart className="h-10 w-10 text-pink-300 dark:text-pink-900 fill-pink-100 dark:fill-pink-950/20 mb-4 animate-bounce" />
              <h3 className="text-base font-bold text-foreground mb-1">Enter Names</h3>
              <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                Provide both names in the left-hand panel and click the action button to check your compatibility forecast.
              </p>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}

export default FlamesGameTool;

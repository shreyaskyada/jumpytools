'use client';

import React from 'react';
import {
  useBmiCalculator,
  TOOL_METADATA,
  TOOL_FAQS,
  TOOL_ABOUT,
} from '@repo/engines/bmi-calculator';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Calculator,
  Activity,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { ToolLayout } from '@/components/layout/ToolLayout';

export function BMICalculatorTool() {
  const {
    state,
    setUnitSystem,
    setHeightCm,
    setWeightKg,
    setHeightFt,
    setHeightIn,
    setWeightLbs,
  } = useBmiCalculator();

  // Compute slider pointer position on standard BMI range 15 to 35
  const getBmiPercentage = (bmi: number) => {
    const minBmi = 15;
    const maxBmi = 35;
    const pct = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.max(0, Math.min(100, pct));
  };

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
                <Calculator className="h-4 w-4 text-amber-500" />
                Calculator Options
              </h3>
            </div>
            <CardContent className="p-5 flex flex-col gap-5">
              {/* Unit Tabs */}
              <div className="grid grid-cols-2 bg-muted/60 p-1 rounded-xl">
                <button
                  onClick={() => setUnitSystem('metric')}
                  className={`py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                    state.unitSystem === 'metric'
                      ? 'bg-card text-foreground shadow-2xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Metric (kg/cm)
                </button>
                <button
                  onClick={() => setUnitSystem('imperial')}
                  className={`py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                    state.unitSystem === 'imperial'
                      ? 'bg-card text-foreground shadow-2xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Imperial (lbs/ft)
                </button>
              </div>

              {/* Height Inputs */}
              {state.unitSystem === 'metric' ? (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-muted-foreground">Height (cm)</label>
                  <Input
                    type="number"
                    value={state.heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    placeholder="175"
                    className="w-full h-11 px-3"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-muted-foreground">Height</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative flex items-center">
                      <Input
                        type="number"
                        value={state.heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        placeholder="5"
                        className="w-full h-11 pl-3 pr-8"
                      />
                      <span className="absolute right-3 text-xs font-bold text-muted-foreground">ft</span>
                    </div>
                    <div className="relative flex items-center">
                      <Input
                        type="number"
                        value={state.heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        placeholder="9"
                        className="w-full h-11 pl-3 pr-8"
                      />
                      <span className="absolute right-3 text-xs font-bold text-muted-foreground">in</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Weight Inputs */}
              {state.unitSystem === 'metric' ? (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-muted-foreground">Weight (kg)</label>
                  <Input
                    type="number"
                    value={state.weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    placeholder="70"
                    className="w-full h-11 px-3"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-muted-foreground">Weight (lbs)</label>
                  <Input
                    type="number"
                    value={state.weightLbs}
                    onChange={(e) => setWeightLbs(e.target.value)}
                    placeholder="154"
                    className="w-full h-11 px-3"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Results Panel (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {state.result ? (
            <>
              {/* Primary BMI Gauge Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between border border-border/80 bg-card rounded-2xl p-6 gap-6">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Your calculated BMI is
                  </span>
                  <h2 className="text-5xl font-black text-foreground mt-1">
                    {state.result.bmi} <span className="text-xl text-muted-foreground font-normal ml-1">kg/m²</span>
                  </h2>
                  <span className={`text-base font-black ${state.result.categoryColor} mt-1`}>
                    {state.result.category}
                  </span>
                </div>

                <div className="flex gap-4">
                  <div className="border border-border/60 bg-muted/10 rounded-xl p-5 text-center min-w-[120px]">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                      BMI Prime
                    </span>
                    <span className="text-2xl font-black text-foreground mt-1 block">
                      {state.result.bmiPrime}
                    </span>
                  </div>

                  <div className="border border-border/60 bg-muted/10 rounded-xl p-5 text-center min-w-[120px]">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                      Ponderal Index
                    </span>
                    <span className="text-2xl font-black text-foreground mt-1 block">
                      {state.result.ponderalIndex} <span className="text-xs text-muted-foreground font-normal">kg/m³</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium Color scale progress gauge */}
              <Card className="border border-border/80 bg-card shadow-xs">
                <div className="px-5 py-4 border-b border-border/60">
                  <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <Activity className="h-4 w-4 text-amber-500" />
                    BMI Range Scale
                  </h3>
                </div>
                <CardContent className="p-6 flex flex-col gap-8">
                  {/* Gauge track */}
                  <div className="relative pt-6">
                    {/* Indicator Slider */}
                    <div
                      className="absolute top-0 flex flex-col items-center -ml-3 transition-all duration-500 ease-out z-10"
                      style={{ left: `${getBmiPercentage(state.result.bmi)}%` }}
                    >
                      <div className="bg-foreground text-background text-[10px] font-black px-1.5 py-0.5 rounded-sm shadow-sm select-none">
                        {state.result.bmi}
                      </div>
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-foreground" />
                    </div>

                    {/* Colored track blocks */}
                    <div className="h-4 w-full rounded-full overflow-hidden flex shadow-inner">
                      {/* Underweight (15-18.5) -> 17.5% */}
                      <div className="h-full bg-blue-500" style={{ width: '17.5%' }} title="Underweight (< 18.5)" />
                      {/* Normal (18.5-25) -> 32.5% */}
                      <div className="h-full bg-green-500" style={{ width: '32.5%' }} title="Normal weight (18.5 - 24.9)" />
                      {/* Overweight (25-30) -> 25% */}
                      <div className="h-full bg-orange-500" style={{ width: '25%' }} title="Overweight (25.0 - 29.9)" />
                      {/* Obese (30-35+) -> 25% */}
                      <div className="h-full bg-red-500" style={{ width: '25%' }} title="Obese (>= 30.0)" />
                    </div>

                    {/* Axis Labels */}
                    <div className="flex justify-between text-[10px] font-bold text-muted-foreground mt-2 px-1">
                      <span>15 (Under)</span>
                      <span>18.5</span>
                      <span>25.0</span>
                      <span>30.0</span>
                      <span>35 (Obese)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Target Guidelines Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border/80 bg-card shadow-xs">
                  <div className="px-5 py-4 border-b border-border/60">
                    <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                      <Heart className="h-4 w-4 text-emerald-500" />
                      Healthy Weight Range
                    </h3>
                  </div>
                  <CardContent className="p-5 flex flex-col gap-1">
                    <span className="text-xs font-bold text-muted-foreground uppercase">Target Weight</span>
                    <span className="text-xl font-extrabold text-foreground mt-1">
                      {state.result.healthyRange.minWeight} - {state.result.healthyRange.maxWeight} {state.result.healthyRange.unit}
                    </span>
                    <span className="text-xs text-muted-foreground mt-2">
                      Based on standard WHO height-weight index formulas.
                    </span>
                  </CardContent>
                </Card>

                <Card className="border border-border/80 bg-card shadow-xs">
                  <div className="px-5 py-4 border-b border-border/60">
                    <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                      <TrendingUp className="h-4 w-4 text-amber-500" />
                      Weight Difference Status
                    </h3>
                  </div>
                  <CardContent className="p-5 flex flex-col gap-1">
                    <span className="text-xs font-bold text-muted-foreground uppercase">Analysis</span>
                    <span className="text-sm font-bold text-foreground mt-2 leading-relaxed">
                      {state.result.weightDifference.message}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Please enter valid height and weight values.
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
export default BMICalculatorTool;


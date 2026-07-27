'use client';

import React from 'react';
import {
  usePercentageCalculator,
  TOOL_METADATA,
  TOOL_FAQS,
  TOOL_ABOUT,
  PercentageMode,
} from '@repo/engines/percentage-calculator';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Percent, ArrowRightLeft, Scale, Calculator, RefreshCw } from 'lucide-react';

export function PercentageCalculatorTool() {
  const {
    state,
    setActiveMode,
    setPctOfX,
    setPctOfY,
    setRatioX,
    setRatioY,
    setChangeX,
    setChangeY,
    setTotalX,
    setTotalY,
    setAddSubtractX,
    setAddSubtractY,
    setAddSubtractOp,
  } = usePercentageCalculator();

  // Helper to render the active mode description
  const getActiveResult = () => {
    switch (state.activeMode) {
      case 'pctOf':
        if (state.pctOf.result === null) return null;
        return {
          value: state.pctOf.result,
          label: 'Calculated Value',
          formula: `${state.pctOf.x}% of ${state.pctOf.y} = ${state.pctOf.result}`,
        };
      case 'ratio':
        if (state.ratio.result === null) return null;
        return {
          value: `${state.ratio.result}%`,
          label: 'Percentage Ratio',
          formula: `${state.ratio.x} is ${state.ratio.result}% of ${state.ratio.y}`,
        };
      case 'change':
        if (state.change.result === null) return null;
        return {
          value: `${state.change.isIncrease ? '+' : '-'}${state.change.result}%`,
          label: state.change.isIncrease ? 'Percentage Increase' : 'Percentage Decrease',
          formula: `From ${state.change.x} to ${state.change.y} is a ${state.change.result}% ${
            state.change.isIncrease ? 'increase' : 'decrease'
          }`,
          isIncrease: state.change.isIncrease,
        };
      case 'total':
        if (state.total.result === null) return null;
        return {
          value: state.total.result,
          label: 'Total Value',
          formula: `${state.total.x} is ${state.total.y}% of ${state.total.result}`,
        };
      case 'addSubtract':
        if (state.addSubtract.result === null) return null;
        return {
          value: state.addSubtract.result,
          label: 'Calculated Sum',
          formula: `${state.addSubtract.x} ${state.addSubtract.op === 'add' ? '+' : '-'} ${
            state.addSubtract.y
          }% = ${state.addSubtract.result}`,
        };
      default:
        return null;
    }
  };

  const activeResult = getActiveResult();

  return (
    <ToolLayout
      metadata={TOOL_METADATA}
      faqs={TOOL_FAQS}
      aboutParagraphs={TOOL_ABOUT}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Inputs & Options Card (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="border border-border/80 bg-card shadow-xs">
            <div className="px-5 py-4 border-b border-border/60">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <Calculator className="h-4 w-4 text-amber-500" />
                Calculation Mode & Inputs
              </h3>
            </div>
            
            <CardContent className="p-5 flex flex-col gap-6">
              {/* Tab Selector & Content wrappers using standard TabsContent */}
              <Tabs
                value={state.activeMode}
                onValueChange={(val) => setActiveMode(val as PercentageMode)}
                className="w-full flex flex-col gap-6"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto md:h-10 gap-1">
                  <TabsTrigger value="pctOf" className="text-xs h-9 md:h-full">
                    Pct of Value
                  </TabsTrigger>
                  <TabsTrigger value="ratio" className="text-xs h-9 md:h-full">
                    Ratio %
                  </TabsTrigger>
                  <TabsTrigger value="change" className="text-xs h-9 md:h-full">
                    Change %
                  </TabsTrigger>
                  <TabsTrigger value="total" className="text-xs h-9 md:h-full">
                    Total Value
                  </TabsTrigger>
                  <TabsTrigger value="addSubtract" className="text-xs h-9 md:h-full">
                    Add/Sub %
                  </TabsTrigger>
                </TabsList>

                {/* TabsContent value="pctOf" */}
                <TabsContent value="pctOf" className="mt-2 min-h-[140px] flex flex-col justify-center outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Percentage (X%)
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          inputMode="decimal"
                          placeholder="10"
                          value={state.pctOf.x}
                          onChange={(e) => setPctOfX(e.target.value)}
                          className="w-full h-12 px-4 text-base font-medium"
                        />
                        <span className="absolute right-4 top-3.5 text-sm font-bold text-muted-foreground">%</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Of Value (Y)
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="200"
                        value={state.pctOf.y}
                        onChange={(e) => setPctOfY(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* TabsContent value="ratio" */}
                <TabsContent value="ratio" className="mt-2 min-h-[140px] flex flex-col justify-center outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Value X
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="50"
                        value={state.ratio.x}
                        onChange={(e) => setRatioX(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Is what % of Value Y
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="200"
                        value={state.ratio.y}
                        onChange={(e) => setRatioY(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* TabsContent value="change" */}
                <TabsContent value="change" className="mt-2 min-h-[140px] flex flex-col justify-center outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Starting Value (X)
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="40"
                        value={state.change.x}
                        onChange={(e) => setChangeX(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Final Value (Y)
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="50"
                        value={state.change.y}
                        onChange={(e) => setChangeY(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* TabsContent value="total" */}
                <TabsContent value="total" className="mt-2 min-h-[140px] flex flex-col justify-center outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Value X
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="20"
                        value={state.total.x}
                        onChange={(e) => setTotalX(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Is Y% of what total?
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          inputMode="decimal"
                          placeholder="10"
                          value={state.total.y}
                          onChange={(e) => setTotalY(e.target.value)}
                          className="w-full h-12 px-4 text-base font-medium"
                        />
                        <span className="absolute right-4 top-3.5 text-sm font-bold text-muted-foreground">%</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* TabsContent value="addSubtract" */}
                <TabsContent value="addSubtract" className="mt-2 min-h-[140px] flex flex-col justify-center outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Base Value (X)
                      </label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="100"
                        value={state.addSubtract.x}
                        onChange={(e) => setAddSubtractX(e.target.value)}
                        className="w-full h-12 px-4 text-base font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Operation
                      </label>
                      <div className="grid grid-cols-2 bg-muted/60 p-1 rounded-xl h-12 items-center">
                        <button
                          onClick={() => setAddSubtractOp('add')}
                          className={`h-10 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                            state.addSubtract.op === 'add'
                              ? 'bg-card text-foreground shadow-2xs'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          Add (+)
                        </button>
                        <button
                          onClick={() => setAddSubtractOp('subtract')}
                          className={`h-10 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                            state.addSubtract.op === 'subtract'
                              ? 'bg-card text-foreground shadow-2xs'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          Sub (-)
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Percentage (Y%)
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          inputMode="decimal"
                          placeholder="15"
                          value={state.addSubtract.y}
                          onChange={(e) => setAddSubtractY(e.target.value)}
                          className="w-full h-12 px-4 text-base font-medium"
                        />
                        <span className="absolute right-4 top-3.5 text-sm font-bold text-muted-foreground">%</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Results Display Panel (1 col) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {activeResult ? (
            <Card className="border border-border/80 bg-card shadow-xs h-full flex flex-col justify-between overflow-hidden">
              <div className="px-5 py-4 border-b border-border/60 bg-muted/10">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Percent className="h-4 w-4 text-emerald-500" />
                  Calculation Result
                </h3>
              </div>

              <div className="p-6 flex flex-col items-center justify-center flex-1 text-center">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {activeResult.label}
                </span>
                <h2 className={`text-5xl font-black mt-2 tracking-tight ${
                  activeResult.isIncrease === false ? 'text-red-500' : 'text-emerald-500'
                }`}>
                  {activeResult.value}
                </h2>
                <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-muted/50 border border-border/40 rounded-full text-sm font-semibold text-foreground">
                  <span>{activeResult.formula}</span>
                </div>
              </div>

              <div className="px-5 py-4 bg-emerald-500/5 dark:bg-emerald-500/10 border-t border-emerald-500/20 text-center">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Calculated successfully in your browser.
                </span>
              </div>
            </Card>
          ) : (
            <Card className="border border-border/80 bg-card shadow-xs h-full flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 animate-pulse">
                <Percent className="h-8 w-8" />
              </div>
              <h4 className="text-base font-bold text-foreground">Ready to Calculate</h4>
              <p className="text-sm text-muted-foreground mt-2 max-w-[240px] leading-relaxed">
                Choose a calculation mode and enter parameters on the left to see results.
              </p>
            </Card>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
export default PercentageCalculatorTool;

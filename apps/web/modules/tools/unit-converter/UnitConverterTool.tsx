'use client';

import React, { useState } from 'react';
import {
  useUnitConverter,
  TOOL_METADATA,
  TOOL_FAQS,
  TOOL_ABOUT,
  UNIT_CATEGORIES,
  formatConvertedNumber,
} from '@repo/engines/unit-converter';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeftRight,
  Clipboard,
  Check,
  Sparkles,
  Shield,
  Sliders,
  ChevronDown,
} from 'lucide-react';
import { toast } from 'sonner';
import { UnitCategoryTabs } from './components/UnitCategoryTabs';
import { UnitConversionTable } from './components/UnitConversionTable';

export function UnitConverterTool() {
  const {
    state,
    setCategory,
    setFromUnit,
    setToUnit,
    setInputValue,
    setPrecision,
    swapUnits,
  } = useUnitConverter('length', '1');

  const [copiedResult, setCopiedResult] = useState(false);

  const currentCategory =
    UNIT_CATEGORIES.find((c) => c.id === state.categoryId) ?? UNIT_CATEGORIES[0]!;

  const handleCopyResult = () => {
    if (!state.result) return;
    const formatted = formatConvertedNumber(state.result.toValue, state.precision);
    const text = `${formatted} ${state.result.toUnit.symbol}`;
    navigator.clipboard.writeText(text);
    setCopiedResult(true);
    toast.success('Copied result to clipboard!');
    setTimeout(() => setCopiedResult(false), 2000);
  };

  const presets = ['1', '5', '10', '50', '100', '1000'];

  return (
    <ToolLayout
      metadata={TOOL_METADATA}
      faqs={TOOL_FAQS}
      aboutParagraphs={TOOL_ABOUT}
    >
      <div className="flex flex-col gap-6">
        {/* Category Pills Navigation */}
        <div className="border border-border bg-card/60 backdrop-blur-sm rounded-xl p-3 shadow-xs">
          <UnitCategoryTabs
            activeCategory={state.categoryId}
            onSelectCategory={setCategory}
          />
        </div>

        {/* Primary Converter Card */}
        <div className="border border-border bg-card rounded-xl p-6 flex flex-col gap-6 shadow-sm">
          {/* Conversion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Input / From Column */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <label htmlFor="from-unit-select" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                From
              </label>
              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  inputMode="decimal"
                  value={state.inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value..."
                  className="h-12 text-lg font-mono font-semibold focus-visible:ring-primary shadow-xs"
                />

                <select
                  id="from-unit-select"
                  value={state.fromUnitId}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                >
                  {currentCategory.units.map((unit) => (
                    <option key={unit.id} value={unit.id} className="bg-popover text-popover-foreground">
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button Column */}
            <div className="md:col-span-1 flex justify-center items-center pt-5">
              <Button
                variant="outline"
                size="icon"
                onClick={swapUnits}
                className="h-10 w-10 rounded-full border-border hover:bg-primary/10 hover:text-primary transition-all cursor-pointer shadow-xs"
                title="Swap units"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Output / To Column */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <label htmlFor="to-unit-select" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                To
              </label>
              <div className="flex flex-col gap-2">
                <div className="h-12 flex items-center justify-between px-3.5 rounded-md border border-input bg-muted/20 text-lg font-mono font-bold text-foreground overflow-x-auto shadow-inner">
                  <span className="select-all truncate">
                    {state.result
                      ? formatConvertedNumber(state.result.toValue, state.precision)
                      : '—'}
                  </span>
                  <span className="text-sm font-sans text-muted-foreground ml-2 shrink-0">
                    {state.result?.toUnit.symbol}
                  </span>
                </div>

                <select
                  id="to-unit-select"
                  value={state.toUnitId}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                >
                  {currentCategory.units.map((unit) => (
                    <option key={unit.id} value={unit.id} className="bg-popover text-popover-foreground">
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Error Message if invalid */}
          {state.error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-xs text-destructive font-medium">
              {state.error}
            </div>
          )}

          {/* Quick Presets and Precision Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border">
            {/* Value presets */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground mr-1">Presets:</span>
              {presets.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setInputValue(val)}
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md border transition-all cursor-pointer ${
                    state.inputValue === val
                      ? 'bg-primary/10 border-primary/30 text-primary font-bold'
                      : 'border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>

            {/* Precision & Copy Result */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Sliders className="h-3.5 w-3.5" />
                <span>Decimals:</span>
                <select
                  value={state.precision}
                  onChange={(e) => setPrecision(Number(e.target.value))}
                  className="h-7 rounded border border-input bg-transparent px-2 text-xs font-mono font-medium cursor-pointer"
                >
                  {[0, 1, 2, 3, 4, 6, 8].map((p) => (
                    <option key={p} value={p} className="bg-popover text-popover-foreground">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                variant="default"
                size="sm"
                onClick={handleCopyResult}
                disabled={!state.result}
                className="h-8 font-semibold text-xs cursor-pointer shadow-xs active:scale-98 transition-transform"
              >
                {copiedResult ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5 text-green-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Clipboard className="mr-1.5 h-3.5 w-3.5" />
                    Copy Result
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Formula Callout */}
          {state.result && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-primary font-medium">
              <Sparkles className="h-4 w-4 shrink-0 text-amber-500" />
              <span>Conversion Formula: </span>
              <span className="font-mono font-bold text-foreground">{state.result.formula}</span>
            </div>
          )}
        </div>

        {/* Client-Side Privacy Callout */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-800 dark:text-emerald-300 text-xs">
          <Shield className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
          <div className="flex-1">
            <span className="font-bold">Instant Client-Side Calculations: </span>
            All unit transformations execute in-memory with zero server network latency.
          </div>
        </div>

        {/* Multi-Unit Comparative Table */}
        {state.result && (
          <UnitConversionTable result={state.result} />
        )}
      </div>
    </ToolLayout>
  );
}

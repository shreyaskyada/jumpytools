'use client';

import React, { useState } from 'react';
import { UnitConversionResult } from '@repo/engines/unit-converter';
import { Button } from '@/components/ui/button';
import { Check, Clipboard, TableProperties } from 'lucide-react';
import { toast } from 'sonner';

interface UnitConversionTableProps {
  result: UnitConversionResult;
  onSelectUnit?: (unitId: string) => void;
}

export function UnitConversionTable({ result, onSelectUnit }: UnitConversionTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (unitId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(unitId);
    toast.success('Copied value to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <TableProperties className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-bold text-foreground">
            All {result.fromUnit.name} Conversions
          </h3>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          {result.allConversions.length} units
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-border/80 text-muted-foreground font-semibold">
              <th className="py-2.5 px-3">Unit Name</th>
              <th className="py-2.5 px-3">Symbol</th>
              <th className="py-2.5 px-3 text-right">Converted Value</th>
              <th className="py-2.5 px-3 text-right w-16">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 font-mono">
            {result.allConversions.map((conv) => {
              const isTarget = conv.unit.id === result.toUnit.id;
              const isSource = conv.unit.id === result.fromUnit.id;

              return (
                <tr
                  key={conv.unit.id}
                  className={`transition-colors hover:bg-muted/40 ${
                    isTarget ? 'bg-primary/5 font-semibold' : ''
                  }`}
                >
                  <td className="py-2.5 px-3 font-sans text-foreground">
                    <div className="flex items-center gap-2">
                      <span>{conv.unit.name}</span>
                      {isSource && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-muted text-muted-foreground font-sans font-medium">
                          Source
                        </span>
                      )}
                      {isTarget && !isSource && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary/20 text-primary font-sans font-medium">
                          Target
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-muted-foreground">{conv.unit.symbol}</td>
                  <td className="py-2.5 px-3 text-right text-foreground font-bold select-all">
                    {conv.formatted}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(conv.unit.id, `${conv.formatted} ${conv.unit.symbol}`)}
                      className="h-7 w-7 opacity-75 hover:opacity-100 cursor-pointer"
                      title={`Copy ${conv.unit.name} value`}
                    >
                      {copiedId === conv.unit.id ? (
                        <Check className="h-3.5 w-3.5 text-green-500" />
                      ) : (
                        <Clipboard className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

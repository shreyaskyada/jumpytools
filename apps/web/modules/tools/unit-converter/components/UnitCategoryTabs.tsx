'use client';

import React from 'react';
import { UnitCategoryId } from '@repo/engines/unit-converter';
import { UNIT_CATEGORIES } from '@repo/engines/unit-converter';
import { Ruler, Scale, Thermometer, Beaker, Gauge, Grid, HardDrive } from 'lucide-react';

interface UnitCategoryTabsProps {
  activeCategory: UnitCategoryId;
  onSelectCategory: (id: UnitCategoryId) => void;
}

export function UnitCategoryTabs({ activeCategory, onSelectCategory }: UnitCategoryTabsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler':
        return <Ruler className="h-4 w-4" />;
      case 'Scale':
        return <Scale className="h-4 w-4" />;
      case 'Thermometer':
        return <Thermometer className="h-4 w-4" />;
      case 'Beaker':
        return <Beaker className="h-4 w-4" />;
      case 'Gauge':
        return <Gauge className="h-4 w-4" />;
      case 'Grid':
        return <Grid className="h-4 w-4" />;
      case 'HardDrive':
        return <HardDrive className="h-4 w-4" />;
      default:
        return <Ruler className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
      {UNIT_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
              isActive
                ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                : 'bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border-border'
            }`}
          >
            {getIcon(cat.icon)}
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}

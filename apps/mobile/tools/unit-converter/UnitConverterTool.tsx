import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import {
  useUnitConverter,
  UNIT_CATEGORIES,
  formatConvertedNumber,
  UnitCategoryId,
} from '@repo/engines/unit-converter';
import { ArrowLeftRight, Clipboard, Check, Sparkles, Shield } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

export function UnitConverterTool() {
  const {
    state,
    setCategory,
    setFromUnit,
    setToUnit,
    setInputValue,
    swapUnits,
  } = useUnitConverter('length', '1');

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [copied, setCopied] = useState(false);
  const [activePicker, setActivePicker] = useState<'from' | 'to' | null>(null);

  const cardBg = isDark ? '#111113' : '#ffffff';
  const cardBorder = isDark ? '#27272a' : '#e4e4e7';
  const textColor = isDark ? '#fafafa' : '#09090b';
  const textMuted = isDark ? '#71717a' : '#a1a1aa';
  const inputBg = isDark ? '#18181b' : '#f4f4f5';

  const currentCategory =
    UNIT_CATEGORIES.find((c) => c.id === state.categoryId) ?? UNIT_CATEGORIES[0]!;

  const fromUnit =
    currentCategory.units.find((u) => u.id === state.fromUnitId) ?? currentCategory.units[0]!;
  const toUnit =
    currentCategory.units.find((u) => u.id === state.toUnitId) ?? currentCategory.units[1] ?? currentCategory.units[0]!;

  const handleCopy = () => {
    if (!state.result) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presets = ['1', '5', '10', '50', '100'];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? '#0a0a0b' : '#f8f8f9' }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 56 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            alignSelf: 'flex-start',
            backgroundColor: isDark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.1)',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              color: '#f59e0b',
            }}
          >
            Math & Calculation
          </Text>
        </View>
        <Text style={{ fontSize: 26, fontWeight: '800', color: textColor, letterSpacing: -0.5 }}>
          Unit Converter
        </Text>
        <Text style={{ fontSize: 14, color: textMuted, marginTop: 4, lineHeight: 20 }}>
          Convert length, weight, temperature, volume, speed, and area instantly.
        </Text>
      </View>

      {/* Category Horizontal Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 16 }}
      >
        {UNIT_CATEGORIES.map((cat) => {
          const isActive = state.categoryId === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => {
                setCategory(cat.id as UnitCategoryId);
                setActivePicker(null);
              }}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 10,
                backgroundColor: isActive ? '#f59e0b' : cardBg,
                borderWidth: 1,
                borderColor: isActive ? '#f59e0b' : cardBorder,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: isActive ? '#ffffff' : textColor,
                }}
              >
                {cat.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Main Conversion Card */}
      <View
        style={{
          backgroundColor: cardBg,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: cardBorder,
          padding: 16,
          marginBottom: 16,
          shadowColor: '#000',
          shadowOpacity: isDark ? 0.3 : 0.05,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 3 },
        }}
      >
        {/* From Section */}
        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontSize: 11, fontWeight: '700', textTransform: 'uppercase', color: textMuted, marginBottom: 6 }}>
            From
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TextInput
              keyboardType="numeric"
              value={state.inputValue}
              onChangeText={setInputValue}
              placeholder="Value..."
              placeholderTextColor={textMuted}
              style={{
                flex: 1,
                backgroundColor: inputBg,
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                fontFamily: 'monospace',
                fontWeight: '700',
                color: textColor,
              }}
            />
            <Pressable
              onPress={() => setActivePicker(activePicker === 'from' ? null : 'from')}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: activePicker === 'from' ? '#f59e0b' : inputBg,
                borderWidth: 1,
                borderColor: cardBorder,
                justifyContent: 'center',
                minWidth: 100,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: '700', color: activePicker === 'from' ? '#ffffff' : textColor, textAlign: 'center' }}>
                {fromUnit.symbol} ({fromUnit.name})
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Unit Selector List when 'from' is active */}
        {activePicker === 'from' && (
          <View style={{ marginBottom: 14, backgroundColor: inputBg, borderRadius: 10, padding: 8, gap: 4 }}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, marginBottom: 4 }}>Select Source Unit:</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              {currentCategory.units.map((u) => (
                <Pressable
                  key={u.id}
                  onPress={() => {
                    setFromUnit(u.id);
                    setActivePicker(null);
                  }}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 6,
                    backgroundColor: state.fromUnitId === u.id ? '#f59e0b' : cardBg,
                    borderWidth: 1,
                    borderColor: cardBorder,
                  }}
                >
                  <Text style={{ fontSize: 11, fontWeight: '600', color: state.fromUnitId === u.id ? '#ffffff' : textColor }}>
                    {u.name} ({u.symbol})
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Swap Button */}
        <View style={{ alignItems: 'center', marginVertical: 6 }}>
          <Pressable
            onPress={swapUnits}
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: isDark ? '#27272a' : '#f4f4f5',
              borderWidth: 1,
              borderColor: cardBorder,
            }}
          >
            <ArrowLeftRight size={16} color={textColor} />
          </Pressable>
        </View>

        {/* To Section */}
        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontSize: 11, fontWeight: '700', textTransform: 'uppercase', color: textMuted, marginBottom: 6 }}>
            To
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: inputBg,
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 10,
                justifyContent: 'center',
              }}
            >
              <Text
                selectable
                style={{
                  fontSize: 16,
                  fontFamily: 'monospace',
                  fontWeight: '800',
                  color: '#f59e0b',
                }}
              >
                {state.result ? formatConvertedNumber(state.result.toValue, state.precision) : '—'}
              </Text>
            </View>
            <Pressable
              onPress={() => setActivePicker(activePicker === 'to' ? null : 'to')}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: activePicker === 'to' ? '#f59e0b' : inputBg,
                borderWidth: 1,
                borderColor: cardBorder,
                justifyContent: 'center',
                minWidth: 100,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: '700', color: activePicker === 'to' ? '#ffffff' : textColor, textAlign: 'center' }}>
                {toUnit.symbol} ({toUnit.name})
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Unit Selector List when 'to' is active */}
        {activePicker === 'to' && (
          <View style={{ marginBottom: 14, backgroundColor: inputBg, borderRadius: 10, padding: 8, gap: 4 }}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, marginBottom: 4 }}>Select Target Unit:</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              {currentCategory.units.map((u) => (
                <Pressable
                  key={u.id}
                  onPress={() => {
                    setToUnit(u.id);
                    setActivePicker(null);
                  }}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 6,
                    backgroundColor: state.toUnitId === u.id ? '#f59e0b' : cardBg,
                    borderWidth: 1,
                    borderColor: cardBorder,
                  }}
                >
                  <Text style={{ fontSize: 11, fontWeight: '600', color: state.toUnitId === u.id ? '#ffffff' : textColor }}>
                    {u.name} ({u.symbol})
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Quick presets */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
          <Text style={{ fontSize: 11, color: textMuted, fontWeight: '600' }}>Presets:</Text>
          {presets.map((p) => (
            <Pressable
              key={p}
              onPress={() => setInputValue(p)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 6,
                backgroundColor: state.inputValue === p ? 'rgba(245,158,11,0.15)' : inputBg,
                borderWidth: 1,
                borderColor: state.inputValue === p ? '#f59e0b' : cardBorder,
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: '600', color: state.inputValue === p ? '#f59e0b' : textColor }}>
                {p}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Formula Display */}
        {state.result && (
          <View
            style={{
              marginTop: 14,
              padding: 10,
              borderRadius: 8,
              backgroundColor: isDark ? 'rgba(245,158,11,0.1)' : 'rgba(245,158,11,0.06)',
              borderWidth: 1,
              borderColor: 'rgba(245,158,11,0.2)',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Sparkles size={14} color="#f59e0b" />
            <Text style={{ fontSize: 11, fontWeight: '700', color: textColor, fontFamily: 'monospace' }}>
              Formula: {state.result.formula}
            </Text>
          </View>
        )}
      </View>

      {/* Copy Result Button */}
      <Pressable
        onPress={handleCopy}
        disabled={!state.result}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          backgroundColor: '#f59e0b',
          paddingVertical: 12,
          borderRadius: 12,
          marginBottom: 16,
          opacity: state.result ? 1 : 0.6,
        }}
      >
        {copied ? (
          <>
            <Check size={16} color="#ffffff" />
            <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 13 }}>Copied Value</Text>
          </>
        ) : (
          <>
            <Clipboard size={16} color="#ffffff" />
            <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 13 }}>Copy Converted Value</Text>
          </>
        )}
      </Pressable>

      {/* Privacy Guarantee Note */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          backgroundColor: isDark ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.08)',
          borderWidth: 1,
          borderColor: isDark ? 'rgba(16,185,129,0.25)' : 'rgba(16,185,129,0.2)',
          borderRadius: 10,
          padding: 10,
          marginBottom: 18,
        }}
      >
        <Shield size={16} color="#10b981" />
        <Text style={{ fontSize: 11, color: isDark ? '#6ee7b7' : '#047857', flex: 1, lineHeight: 16 }}>
          100% Offline calculations. Zero server network requests.
        </Text>
      </View>

      {/* Comparative Conversion List */}
      {state.result && (
        <View
          style={{
            backgroundColor: cardBg,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: cardBorder,
            padding: 14,
            gap: 8,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: '700', color: textColor, marginBottom: 4 }}>
            All {fromUnit.name} Conversions
          </Text>
          {state.result.allConversions.map((conv) => {
            const isTarget = conv.unit.id === toUnit.id;
            return (
              <View
                key={conv.unit.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                  backgroundColor: isTarget ? (isDark ? 'rgba(245,158,11,0.12)' : 'rgba(245,158,11,0.08)') : 'transparent',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={{ fontSize: 12, fontWeight: isTarget ? '700' : '500', color: textColor }}>
                    {conv.unit.name}
                  </Text>
                  <Text style={{ fontSize: 11, color: textMuted, fontFamily: 'monospace' }}>
                    ({conv.unit.symbol})
                  </Text>
                </View>
                <Text
                  selectable
                  style={{
                    fontSize: 12,
                    fontFamily: 'monospace',
                    fontWeight: '700',
                    color: isTarget ? '#f59e0b' : textColor,
                  }}
                >
                  {conv.formatted}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

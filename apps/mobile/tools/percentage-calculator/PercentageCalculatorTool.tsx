import React from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { usePercentageCalculator, PercentageMode } from '@repo/engines/percentage-calculator';
import { Percent, ArrowLeftRight, Scale, Calculator, RefreshCw } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

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

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const cardBg = isDark ? '#111113' : '#ffffff';
  const cardBorder = isDark ? '#27272a' : '#e4e4e7';
  const textColor = isDark ? '#fafafa' : '#09090b';
  const textMuted = isDark ? '#71717a' : '#a1a1aa';
  const inputBg = isDark ? '#18181b' : '#f4f4f5';

  const modes: { key: PercentageMode; label: string; icon: any }[] = [
    { key: 'pctOf', label: 'Pct of Value', icon: Percent },
    { key: 'ratio', label: 'Ratio %', icon: Scale },
    { key: 'change', label: 'Change %', icon: ArrowLeftRight },
    { key: 'total', label: 'Total Value', icon: Calculator },
    { key: 'addSubtract', label: 'Add/Sub %', icon: RefreshCw },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? '#0a0a0b' : '#f8f8f9' }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 56 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={{ marginBottom: 20 }}>
        <View style={{ alignSelf: 'flex-start', backgroundColor: isDark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginBottom: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', color: '#f59e0b' }}>
            Math & Calculation
          </Text>
        </View>
        <Text style={{ fontSize: 26, fontWeight: '800', color: textColor, letterSpacing: -0.5 }}>
          Percentage Calculator
        </Text>
        <Text style={{ fontSize: 14, color: textMuted, marginTop: 4, lineHeight: 20 }}>
          Solve simple and complex percentage problems instantly.
        </Text>
      </View>

      {/* Tabs Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
        contentContainerStyle={{ gap: 8, paddingRight: 16 }}
      >
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = state.activeMode === mode.key;
          return (
            <Pressable
              key={mode.key}
              onPress={() => setActiveMode(mode.key)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: isActive ? '#f59e0b' : cardBg,
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 99,
                borderWidth: 1,
                borderColor: isActive ? '#f59e0b' : cardBorder,
              }}
            >
              <Icon size={14} color={isActive ? '#000000' : textColor} />
              <Text style={{ fontSize: 13, fontWeight: '700', color: isActive ? '#000000' : textColor }}>
                {mode.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Calculator Card */}
      <View style={{ backgroundColor: cardBg, borderRadius: 16, borderWidth: 1, borderColor: cardBorder, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3 }}>
        
        {/* Mode 1: Pct Of */}
        {state.activeMode === 'pctOf' && (
          <View>
            <Text style={{ fontSize: 13, fontWeight: '700', color: textMuted, marginBottom: 12 }}>
              What is X% of Y?
            </Text>
            <View style={{ gap: 16 }}>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Percentage (X%)
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="10"
                  placeholderTextColor={textMuted}
                  value={state.pctOf.x}
                  onChangeText={setPctOfX}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Of Value (Y)
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="200"
                  placeholderTextColor={textMuted}
                  value={state.pctOf.y}
                  onChangeText={setPctOfY}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
            </View>

            {state.pctOf.result !== null && (
              <View style={{ marginTop: 24, padding: 16, borderRadius: 12, backgroundColor: 'rgba(16,185,129,0.1)', borderParent: 1, borderColor: 'rgba(16,185,129,0.2)', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>Result</Text>
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#10b981', marginTop: 4 }}>
                  {state.pctOf.result}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Mode 2: Ratio */}
        {state.activeMode === 'ratio' && (
          <View>
            <Text style={{ fontSize: 13, fontWeight: '700', color: textMuted, marginBottom: 12 }}>
              X is what percent of Y?
            </Text>
            <View style={{ gap: 16 }}>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Value X
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="50"
                  placeholderTextColor={textMuted}
                  value={state.ratio.x}
                  onChangeText={setRatioX}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Value Y
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="200"
                  placeholderTextColor={textMuted}
                  value={state.ratio.y}
                  onChangeText={setRatioY}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
            </View>

            {state.ratio.result !== null && (
              <View style={{ marginTop: 24, padding: 16, borderRadius: 12, backgroundColor: 'rgba(16,185,129,0.1)', borderParent: 1, borderColor: 'rgba(16,185,129,0.2)', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>Result</Text>
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#10b981', marginTop: 4 }}>
                  {state.ratio.result}%
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Mode 3: Change */}
        {state.activeMode === 'change' && (
          <View>
            <Text style={{ fontSize: 13, fontWeight: '700', color: textMuted, marginBottom: 12 }}>
              Percentage increase/decrease from X to Y?
            </Text>
            <View style={{ gap: 16 }}>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  From Value X
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="40"
                  placeholderTextColor={textMuted}
                  value={state.change.x}
                  onChangeText={setChangeX}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  To Value Y
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="50"
                  placeholderTextColor={textMuted}
                  value={state.change.y}
                  onChangeText={setChangeY}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
            </View>

            {state.change.result !== null && (
              <View style={{ marginTop: 24, padding: 16, borderRadius: 12, backgroundColor: state.change.isIncrease ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>Result</Text>
                <Text style={{ fontSize: 24, fontWeight: '900', color: state.change.isIncrease ? '#10b981' : '#ef4444', marginTop: 4 }}>
                  {state.change.isIncrease ? 'Increase of ' : 'Decrease of '}
                  {state.change.result}%
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Mode 4: Total */}
        {state.activeMode === 'total' && (
          <View>
            <Text style={{ fontSize: 13, fontWeight: '700', color: textMuted, marginBottom: 12 }}>
              X is Y% of what?
            </Text>
            <View style={{ gap: 16 }}>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Value X
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="20"
                  placeholderTextColor={textMuted}
                  value={state.total.x}
                  onChangeText={setTotalX}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Percentage Y (%)
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="10"
                  placeholderTextColor={textMuted}
                  value={state.total.y}
                  onChangeText={setTotalY}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
            </View>

            {state.total.result !== null && (
              <View style={{ marginTop: 24, padding: 16, borderRadius: 12, backgroundColor: 'rgba(16,185,129,0.1)', borderParent: 1, borderColor: 'rgba(16,185,129,0.2)', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>Result</Text>
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#10b981', marginTop: 4 }}>
                  {state.total.result}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Mode 5: AddSubtract */}
        {state.activeMode === 'addSubtract' && (
          <View>
            <Text style={{ fontSize: 13, fontWeight: '700', color: textMuted, marginBottom: 12 }}>
              Add or Subtract Y% to/from X
            </Text>
            <View style={{ gap: 16 }}>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Base Value X
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="100"
                  placeholderTextColor={textMuted}
                  value={state.addSubtract.x}
                  onChangeText={setAddSubtractX}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Operation
                </Text>
                <View style={{ flexDirection: 'row', backgroundColor: inputBg, borderRadius: 8, padding: 3, gap: 4 }}>
                  <Pressable
                    onPress={() => setAddSubtractOp('add')}
                    style={{ flex: 1, height: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 6, backgroundColor: state.addSubtract.op === 'add' ? '#f59e0b' : 'transparent' }}
                  >
                    <Text style={{ fontSize: 12, fontWeight: '700', color: state.addSubtract.op === 'add' ? '#000000' : textColor }}>Add (+)</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setAddSubtractOp('subtract')}
                    style={{ flex: 1, height: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 6, backgroundColor: state.addSubtract.op === 'subtract' ? '#f59e0b' : 'transparent' }}
                  >
                    <Text style={{ fontSize: 12, fontWeight: '700', color: state.addSubtract.op === 'subtract' ? '#000000' : textColor }}>Subtract (-)</Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '700', color: textMuted, textTransform: 'uppercase', marginBottom: 6 }}>
                  Percentage Y (%)
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="15"
                  placeholderTextColor={textMuted}
                  value={state.addSubtract.y}
                  onChangeText={setAddSubtractY}
                  style={{ height: 44, backgroundColor: inputBg, color: textColor, borderRadius: 8, borderWidth: 1, borderColor: cardBorder, paddingHorizontal: 12, fontSize: 15 }}
                />
              </View>
            </View>

            {state.addSubtract.result !== null && (
              <View style={{ marginTop: 24, padding: 16, borderRadius: 12, backgroundColor: 'rgba(16,185,129,0.1)', borderParent: 1, borderColor: 'rgba(16,185,129,0.2)', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: textMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>Result</Text>
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#10b981', marginTop: 4 }}>
                  {state.addSubtract.result}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
export default PercentageCalculatorTool;

import React from 'react';
import { View } from 'react-native';
import { PercentageCalculatorTool } from './PercentageCalculatorTool';
import { useColorScheme } from 'nativewind';

export default function PercentageCalculatorScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0f172a' : '#ffffff' }}>
      <PercentageCalculatorTool />
    </View>
  );
}

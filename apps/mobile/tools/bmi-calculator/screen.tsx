import React from 'react';
import { View } from 'react-native';
import { BMICalculatorTool } from './BMICalculatorTool';
import { useColorScheme } from 'nativewind';

export default function BMICalculatorScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0f172a' : '#ffffff' }}>
      <BMICalculatorTool />
    </View>
  );
}

import React from 'react';
import { View } from 'react-native';
import { LoveCalculatorTool } from './LoveCalculatorTool';
import { useColorScheme } from 'nativewind';

export default function LoveCalculatorScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0f172a' : '#ffffff' }}>
      <LoveCalculatorTool />
    </View>
  );
}

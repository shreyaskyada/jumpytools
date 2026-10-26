import React from 'react';
import { View } from 'react-native';
import { HashGeneratorTool } from './HashGeneratorTool';
import { useColorScheme } from 'nativewind';

export default function HashGeneratorScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0a0a0b' : '#f8f8f9' }}>
      <HashGeneratorTool />
    </View>
  );
}

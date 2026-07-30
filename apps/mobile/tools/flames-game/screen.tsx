import React from 'react';
import { View } from 'react-native';
import { FlamesGameTool } from './FlamesGameTool';
import { useColorScheme } from 'nativewind';

export default function FlamesGameScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0f172a' : '#ffffff' }}>
      <FlamesGameTool />
    </View>
  );
}

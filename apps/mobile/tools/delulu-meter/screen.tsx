import React from 'react';
import { View } from 'react-native';
import { DeluluMeterTool } from './DeluluMeterTool';
import { useColorScheme } from 'nativewind';

export default function DeluluMeterScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0f172a' : '#ffffff' }}>
      <DeluluMeterTool />
    </View>
  );
}

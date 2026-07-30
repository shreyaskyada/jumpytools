import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

export function FlamesGameTool() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const cardBg = isDark ? '#111113' : '#ffffff';
  const cardBorder = isDark ? '#27272a' : '#e4e4e7';
  const textColor = isDark ? '#fafafa' : '#09090b';
  const textMuted = isDark ? '#71717a' : '#a1a1aa';

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? '#0a0a0b' : '#f8f8f9' }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 56 }}
    >
      <View style={{ marginBottom: 24 }}>
        <View style={{ alignSelf: 'flex-start', backgroundColor: isDark ? 'rgba(236,72,153,0.15)' : 'rgba(236,72,153,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginBottom: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', color: '#ec4899' }}>
            Fun & Games
          </Text>
        </View>
        <Text style={{ fontSize: 26, fontWeight: '800', color: textColor, letterSpacing: -0.5 }}>
          FLAMES Game
        </Text>
        <Text style={{ fontSize: 14, color: textMuted, marginTop: 4, lineHeight: 20 }}>
          Play the classic childhood FLAMES game online.
        </Text>
      </View>

      <View style={{ backgroundColor: cardBg, borderRadius: 16, borderWidth: 1, borderColor: cardBorder, padding: 20, alignItems: 'center' }}>
        <Heart size={48} color="#ec4899" style={{ marginBottom: 12 }} />
        <Text style={{ fontSize: 16, fontWeight: '700', color: textColor, textAlign: 'center', marginBottom: 8 }}>
          FLAMES Game Mobile
        </Text>
        <Text style={{ fontSize: 13, color: textMuted, textAlign: 'center', lineHeight: 18 }}>
          Please use the desktop/web version to enter names, cancel matching characters, and count through the F-L-A-M-E-S elimination board to reveal your relationship category outcome.
        </Text>
      </View>
    </ScrollView>
  );
}
export default FlamesGameTool;

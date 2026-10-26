import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput, Switch } from 'react-native';
import { useHashGenerator, HASH_ALGORITHMS, HashAlgorithm } from '@repo/engines/hash-generator';
import { Lock, Shield, Clipboard, Check, Sparkles, Trash2, ShieldCheck, AlertTriangle } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

export function HashGeneratorTool() {
  const {
    state,
    setInput,
    setUppercase,
    setEncoding,
    clear,
    loadSample,
  } = useHashGenerator('Hello, Jumpytools!');

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [copiedId, setCopiedId] = useState<HashAlgorithm | 'all' | null>(null);

  const cardBg = isDark ? '#111113' : '#ffffff';
  const cardBorder = isDark ? '#27272a' : '#e4e4e7';
  const textColor = isDark ? '#fafafa' : '#09090b';
  const textMuted = isDark ? '#71717a' : '#a1a1aa';
  const inputBg = isDark ? '#18181b' : '#f4f4f5';

  const handleCopySingle = (algoId: HashAlgorithm, val: string) => {
    if (!val) return;
    setCopiedId(algoId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    if (!state.input) return;
    setCopiedId('all');
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            backgroundColor: isDark ? 'rgba(239,68,68,0.15)' : 'rgba(239,68,68,0.1)',
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
              color: '#ef4444',
            }}
          >
            Security Tools
          </Text>
        </View>
        <Text style={{ fontSize: 26, fontWeight: '800', color: textColor, letterSpacing: -0.5 }}>
          Hash Generator
        </Text>
        <Text style={{ fontSize: 14, color: textMuted, marginTop: 4, lineHeight: 20 }}>
          Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly. 100% offline.
        </Text>
      </View>

      {/* Main Input Card */}
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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: textColor }}>Text Input</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Pressable
              onPress={() => loadSample('Hello, Jumpytools!')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 6,
                backgroundColor: isDark ? '#27272a' : '#f4f4f5',
              }}
            >
              <Sparkles size={12} color="#f59e0b" />
              <Text style={{ fontSize: 11, fontWeight: '600', color: textColor }}>Sample</Text>
            </Pressable>
            <Pressable
              onPress={clear}
              disabled={!state.input}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 6,
                backgroundColor: isDark ? '#27272a' : '#f4f4f5',
                opacity: state.input ? 1 : 0.5,
              }}
            >
              <Trash2 size={12} color="#ef4444" />
              <Text style={{ fontSize: 11, fontWeight: '600', color: '#ef4444' }}>Clear</Text>
            </Pressable>
          </View>
        </View>

        <TextInput
          multiline
          numberOfLines={4}
          value={state.input}
          onChangeText={setInput}
          placeholder="Type or paste text here..."
          placeholderTextColor={textMuted}
          style={{
            backgroundColor: inputBg,
            borderRadius: 10,
            padding: 12,
            fontSize: 13,
            fontFamily: 'monospace',
            color: textColor,
            minHeight: 80,
            textAlignVertical: 'top',
          }}
        />

        {/* Options */}
        <View style={{ marginTop: 14, paddingTop: 12, borderTopWidth: 1, borderTopColor: cardBorder, gap: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 13, color: textColor, fontWeight: '500' }}>Uppercase Output</Text>
            <Switch
              value={state.options.uppercase}
              onValueChange={setUppercase}
              trackColor={{ false: isDark ? '#3f3f46' : '#e4e4e7', true: '#6366f1' }}
              thumbColor="#ffffff"
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 13, color: textColor, fontWeight: '500' }}>Encoding Format</Text>
            <View style={{ flexDirection: 'row', backgroundColor: inputBg, borderRadius: 8, padding: 2 }}>
              <Pressable
                onPress={() => setEncoding('hex')}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 6,
                  backgroundColor: state.options.encoding === 'hex' ? (isDark ? '#27272a' : '#ffffff') : 'transparent',
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: state.options.encoding === 'hex' ? textColor : textMuted,
                  }}
                >
                  HEX
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setEncoding('base64')}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 6,
                  backgroundColor: state.options.encoding === 'base64' ? (isDark ? '#27272a' : '#ffffff') : 'transparent',
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: state.options.encoding === 'base64' ? textColor : textMuted,
                  }}
                >
                  Base64
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Copy All Button */}
      <Pressable
        onPress={handleCopyAll}
        disabled={!state.input}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          backgroundColor: '#6366f1',
          paddingVertical: 12,
          borderRadius: 12,
          marginBottom: 16,
          opacity: state.input ? 1 : 0.6,
        }}
      >
        {copiedId === 'all' ? (
          <>
            <Check size={16} color="#ffffff" />
            <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 13 }}>Copied All Hashes</Text>
          </>
        ) : (
          <>
            <Clipboard size={16} color="#ffffff" />
            <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 13 }}>Copy All Hashes</Text>
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
          100% Client-Side. Calculations execute entirely in memory on your device.
        </Text>
      </View>

      {/* Algorithm Output Cards */}
      <View style={{ gap: 10 }}>
        {HASH_ALGORITHMS.map((algo) => {
          const hashVal = state.results[algo.id];
          const isCopied = copiedId === algo.id;
          return (
            <View
              key={algo.id}
              style={{
                backgroundColor: cardBg,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: cardBorder,
                padding: 12,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={{ fontSize: 13, fontWeight: '700', color: textColor, fontFamily: 'monospace' }}>
                    {algo.name}
                  </Text>
                  <Text style={{ fontSize: 10, color: textMuted, fontFamily: 'monospace' }}>
                    ({algo.bits} bit)
                  </Text>
                  {algo.status === 'secure' ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, backgroundColor: 'rgba(16,185,129,0.1)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                      <ShieldCheck size={10} color="#10b981" />
                      <Text style={{ fontSize: 9, fontWeight: '600', color: '#10b981' }}>Secure</Text>
                    </View>
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, backgroundColor: 'rgba(245,158,11,0.1)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                      <AlertTriangle size={10} color="#f59e0b" />
                      <Text style={{ fontSize: 9, fontWeight: '600', color: '#f59e0b' }}>Legacy</Text>
                    </View>
                  )}
                </View>

                <Pressable
                  onPress={() => handleCopySingle(algo.id, hashVal)}
                  disabled={!hashVal}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 6,
                    backgroundColor: isDark ? '#27272a' : '#f4f4f5',
                    opacity: hashVal ? 1 : 0.4,
                  }}
                >
                  {isCopied ? (
                    <>
                      <Check size={12} color="#10b981" />
                      <Text style={{ fontSize: 10, color: '#10b981', fontWeight: '600' }}>Copied</Text>
                    </>
                  ) : (
                    <>
                      <Clipboard size={12} color={textMuted} />
                      <Text style={{ fontSize: 10, color: textMuted, fontWeight: '600' }}>Copy</Text>
                    </>
                  )}
                </Pressable>
              </View>

              <View
                style={{
                  backgroundColor: inputBg,
                  borderRadius: 8,
                  padding: 8,
                }}
              >
                <Text
                  selectable
                  style={{
                    fontSize: 11,
                    fontFamily: 'monospace',
                    color: hashVal ? textColor : textMuted,
                    lineHeight: 16,
                  }}
                >
                  {hashVal || `Enter text to generate ${algo.name} hash`}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

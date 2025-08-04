import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Arcano Pessoal',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-playing-diamond" size={28} color="white" />,
        }}
      />
      <Tabs.Screen
        name="allArcanos"
        options={{
          title: 'Todos os arcanos',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-playing" size={28} color="white" />,
        }}
      />
    </Tabs>
  );
}

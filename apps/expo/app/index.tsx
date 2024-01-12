import { useSelector } from 'react-redux';
import { Platform, StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { darkTheme, theme } from 'app/theme';
import LandingPage from 'app/components/landing_page';
import Dashboard from 'app/screens/dashboard';
import useTheme from 'app/hooks/useTheme';
import { current } from '@reduxjs/toolkit';
import Head from 'expo-router/head';

export default function Index() {
  const {
    enableDarkMode,
    enableLightMode,
    isDark,
    isLight,
    currentTheme = theme,
  } = useTheme();

  const user = useSelector((state) => state.auth.user);

  const mutualStyles = {
    backgroundColor: currentTheme.colors.background,
    flex: 1,
  };

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>PackRat</title>
        </Head>
      )}
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'Home',
          name: 'Home',
        }}
      />
      <View style={mutualStyles}>
        {!user ? <LandingPage /> : <Dashboard />}
      </View>
    </>
  );
}
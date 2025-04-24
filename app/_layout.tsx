import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const scheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: scheme === 'dark' ? '#000' : '#fff' }}>
      <StatusBar barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}

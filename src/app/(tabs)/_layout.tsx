import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from '@/src/constants/Routes';

import WalletScreen from './Wallet';

import { TabBarIconKey, TabBarProps } from '../../components/Navigation/TabBar/TabBar.types';
import TabBar from '../../components/Navigation/TabBar';
// import SettingIcon from "@/src/assets/icons/setting.svg";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const clearStackNavigatorOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent',
    cardStyleInterpolator: () => ({
      overlayStyle: {
        opacity: 0,
      },
    }),
  },
  animationEnabled: false,
};

const WalletModalFlow = () => (
  <Stack.Navigator mode={'modal'} screenOptions={clearStackNavigatorOptions}>
    <Stack.Screen
      name={'Wallet'}
      component={WalletScreen}
      options={{ headerShown: true, animationEnabled: false }}
    />
  </Stack.Navigator>
);

const WalletTabStackFlow = () => (
  <Stack.Navigator initialRouteName={Routes.WALLET_VIEW}>
    <Stack.Screen
      name={Routes.WALLET_VIEW}
      component={WalletModalFlow}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="AddAsset"
      component={AddAsset}
      options={AddAsset.navigationOptions}
    />
    <Stack.Screen
      name="Collectible"
      component={Collectible}
      options={Collectible.navigationOptions}
    />
    <Stack.Screen
      name="ConfirmAddAsset"
      component={ConfirmAddAsset}
      options={ConfirmAddAsset.navigationOptions}
    />
    <Stack.Screen
      name="RevealPrivateCredentialView"
      component={RevealPrivateCredential}
    /> */}
  </Stack.Navigator>
);

const WalletTabModalFlow = () => (
  <Stack.Navigator mode={'modal'} screenOptions={clearStackNavigatorOptions}>
    <Stack.Screen
      name={Routes.WALLET.TAB_STACK_FLOW}
      component={WalletTabStackFlow}
    />
  </Stack.Navigator>
);

export default function TabLayout() {
  const options = {
    home: {
      headerShown: false,
      title: '',
      tabBarIconKey: TabBarIconKey.Actions,
    },
    actions: {
      headerShown: false,
      title: '',
      tabBarIconKey: TabBarIconKey.Actions,
    },
    browser: {
      headerShown: false,
      title: '',
      tabBarIconKey: TabBarIconKey.Browser,
    },
    activity: {
      headerShown: false,
      title: '',
      tabBarIconKey: TabBarIconKey.Activity,
    },
    settings: {
      headerShown: false,
      title: '',
      tabBarIconKey: TabBarIconKey.Setting,
      unmountOnBlur: true,
    },
  };

  const renderTabBar = ({ state, descriptors, navigation }: TabBarProps) => {
    return (
      <TabBar
        state={state}
        descriptors={descriptors}
        navigation={navigation}
      />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={Routes.WALLET.HOME}
      tabBar={renderTabBar}
    >
      <Tab.Screen
        name={Routes.WALLET.HOME}
        options={options.home}
        component={WalletTabModalFlow}
      />
    </Tab.Navigator>
  );
}

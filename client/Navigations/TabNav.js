import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Liked from '../screens/Liked';
import Home from '../screens/Home';
import Map from '../screens/Map';
import Surprise from '../screens/Surprise';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Octicons from '@expo/vector-icons/Octicons';
import LoginScreen from '../screens/Login';
import RestaurantDetail from '../screens/Restaurant/RestaurantDetail';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/Signup';
import ProfileCard from '../Components/ProfileCard';
import LogoutPage from '../screens/LogoutPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={Home} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapMain" component={Map} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
}

function SurpriseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SurpriseMain" component={Surprise} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
}

function LikedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LikedMain" component={Liked} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
}

function ProfileStack(){
  return(
    <Stack.Navigator screenOptions={ {headerShown: false } }>
      <Stack.Screen name='ProfileMain' component={ProfileScreen}  />
      <Stack.Screen name="ProfileCard" component={ProfileCard} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignUpScreen} />
      <Stack.Screen name='Logout' component={LogoutPage} />
    </Stack.Navigator>
  )
}

function TabNav() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
        if (routeName === 'RestaurantDetail') {
          return { display: 'none' };
        }
        return {
          height: 90,
          paddingTop: 10,
          elevation: 8,  
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 4,
        };
      })(route),
      tabBarActiveTintColor: '#FF9400',  
      tabBarInactiveTintColor: '#9E9E9E',
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          let iconName;
          let iconSize = 24;

          if (route.name === 'Home') {
            IconComponent = Octicons;
            iconName = 'home';
          } else if (route.name === 'Map') {
            IconComponent = Ionicons;
            iconName = focused ? 'compass' : 'compass-outline';
            iconSize = 26;
          } else if (route.name === 'Surprise') {
            IconComponent = Ionicons;
            iconName = focused ? 'dice' : 'dice-outline';
            iconSize = 26;
          } else if (route.name === 'Liked') {
            IconComponent = Octicons;
            iconName = focused ? 'heart-fill':'heart'; 
          } else if (route.name === 'Profile') {
            IconComponent = FontAwesome;
            iconName = focused ? 'user-circle' : 'user-circle-o';
          }

          return <IconComponent name={iconName} size={iconSize} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text style={{
              color: focused? '#221C19':'#9e9e9e',
              fontSize: 10,
              fontWeight: focused ? 'bold' : 'normal',
              textTransform: 'uppercase',
            }}>
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Map" component={MapStack} />
      <Tab.Screen name="Surprise" component={SurpriseStack} />
      <Tab.Screen name="Liked" component={LikedStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default TabNav;
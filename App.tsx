import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen.tsx';
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen.tsx";
import LearningScreen from "./screens/LearningScreen/LearningScreen.tsx";
import QuizScreen from "./screens/QuizScreen/QuizScreen.tsx";

const Stack = createStackNavigator();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="QuizScreen" component={QuizScreen} />
                <Stack.Screen name="LearningScreen" component={LearningScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;



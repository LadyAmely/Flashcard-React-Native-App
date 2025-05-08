import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import {COLORS} from "../../../styles/colors/variables.ts";

interface GradientBackgroundProps {
    children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
    return (
        <LinearGradient
            colors={[COLORS.primary, COLORS.secondary]}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {children}
        </LinearGradient>
    );
};

export default GradientBackground;

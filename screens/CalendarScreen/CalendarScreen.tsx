import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Card from "../../components/atoms/Card/Card.tsx";
import {calendarStyles} from "./calendarScreenStyles.ts";
import {useStudyCalendar} from "../../hooks/useStudyCalendar.ts";
import {calendarTheme} from "../../assets/theme/calendarTheme.ts";


const CalendarScreen = () => {
    const {markedDates, onDayPress} = useStudyCalendar();
    return (
        <View style={calendarStyles.container}>
            <Card>
                <Text style={calendarStyles.headerText}>Learning Calendar</Text>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={onDayPress}
                    theme={calendarTheme}
                />
            </Card>
        </View>
    );
};

export default CalendarScreen;

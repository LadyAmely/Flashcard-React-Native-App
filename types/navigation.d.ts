

export type RootStackParamList = {
    WelcomeScreen: undefined;
    HomeScreen: undefined;
    CategoryScreen: undefined;
    LearningScreen: { category: string };
    SummaryScreen: { category: string; correctAnswers: number; totalQuestions: number }; // Parametry do podsumowania
    QuizScreen: { category: string };
};

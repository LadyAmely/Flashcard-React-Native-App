

export type RootStackParamList = {
    WelcomeScreen: undefined;
    HomeScreen: undefined;
    CategoryScreen: undefined;
    LearningScreen: { flashcards: { question: string; answer: string }[] };
    SummaryScreen: { category: string; correctAnswers: number; totalQuestions: number }; // Parametry do podsumowania
    QuizScreen: { flashcards: { question: string; answer: string }[] };
};

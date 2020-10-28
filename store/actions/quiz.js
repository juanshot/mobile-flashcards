export const ADD_QUIZ_ANSWER = "ADD_QUIZ_ANSWER";
export const CREATE_QUIZ = "CREATE_QUIZ";

export const createQuiz = (quiz) => {
  return {
    type: CREATE_QUIZ,
    quiz,
  };
};

export const addQuizAnswer = (card) => {
  return {
    type: ADD_QUIZ_ANSWER,
    card,
  };
};

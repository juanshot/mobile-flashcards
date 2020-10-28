import { CREATE_QUIZ, ADD_QUIZ_ANSWER } from "../types/quiz";

export default function quiz(state = {}, action) {
  switch (action.type) {
    case CREATE_QUIZ:
      return {
        ...action.quiz,
      };
    case ADD_QUIZ_ANSWER:
      return {
        ...action.quiz,
        cards: {
          ...state.cards,
          ...action.card,
        },
      };
    default:
      return state;
  }
}

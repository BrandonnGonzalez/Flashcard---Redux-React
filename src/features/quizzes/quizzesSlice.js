import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

const options = {
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
    // extra reducers here

};

// thunk to quizz to the related topic
export const addQuizAndAddToTopic = payload => {
    const { quizId, name, topicId, cardIds } = payload;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId({quizId: quizId, topicId: topicId}));
    }
};


export const quizzesSlice = createSlice(options);

// selector
export const selectQuizzes = state => state.quizzes.quizzes;
// actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;


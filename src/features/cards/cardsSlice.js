import { createSlice } from 'react-redux';

const options = {
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { cardId, cardFront, cardBack} = action.payload;
            state.cards[cardId] =  {
                cardId: cardId,
                front: cardFront,
                back: cardBack
            };
        },
    },
    //extra reducers here
};

export const cardsSlice = createSlice(options);
//selector
export const selectCards = state => state.cards.cards;
// actions + reducer
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
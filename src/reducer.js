//declare app lvl states to be used laetr

//states used
export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTool = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//reducer taking in state and action to preform opperationson the state
const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        default:
            return state;
    }

};

export default reducer;
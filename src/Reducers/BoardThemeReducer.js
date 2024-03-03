export const BoardThemeReducer = (state, action) => {
    switch(action){
        case 'black':
           return state = 'blackBoard'
        case 'white':
            return state = 'whiteBoard'
        default:
            throw new Error();
    }
}
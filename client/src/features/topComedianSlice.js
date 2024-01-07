import { createSlice } from '@reduxjs/toolkit' 

const initialState = { value : {topComedians : []}};
export const topComedianSlice = createSlice({
    name: "topComedians",
    initialState,
    reducers: {
        setTopComedians: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setTopComedians } = topComedianSlice.actions;
export default topComedianSlice.reducer;
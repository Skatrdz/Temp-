import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Tags = {
    tags: string;
}


const initialState: Tags = {
    tags: "",
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags(state, action: PayloadAction<string>) {
            state.tags = action.payload
        },

    },
});

export const { setTags} = tagsSlice.actions;

export default tagsSlice.reducer;
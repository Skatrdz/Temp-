import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Note = {
    defaultValue: string;
    forHelperValue: string;
    textId: string;
    formHelperId: string;
    tags: [string];
}

type NotesState = {
    list: Note[];
}

const initialState: NotesState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<string>) {
            state.list.push({
                defaultValue: "Текст заметки",
                forHelperValue: "#happy",
                textId: new Date().getTime().toString(),
                formHelperId: (new Date().getTime()+1).toString(),
                tags: [""]
            });
        },
        removeNote(state, action: PayloadAction<string>) {
            state.list = state.list.filter(note => note.textId !== action.payload);
        },
        changeTags(state, action: PayloadAction<[string, string]>){
            let objIndex = state.list.findIndex((obj => obj.textId === action.payload[0]));
            state.list[objIndex].forHelperValue = action.payload[1]
        }

    },
});

export const { addNote, changeTags, removeNote} = todoSlice.actions;

export default todoSlice.reducer;
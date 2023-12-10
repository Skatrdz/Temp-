import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Note = {
    defaultValue: string;
    forHelperValue: string;
    textId: string;
    formHelperId: string;
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
                forHelperValue: "Текст хелпера",
                textId: "1",
                formHelperId: "",
            });
        },
        removeNote(state, action: PayloadAction<string>) {
            state.list = state.list.filter(note => note.textId !== action.payload);
        }

    },
});

export const { addNote, removeNote} = todoSlice.actions;

export default todoSlice.reducer;
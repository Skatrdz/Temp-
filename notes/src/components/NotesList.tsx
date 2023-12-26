import React from "react";
import {Grid} from "@mui/material";
import NoteItem from './NoteItem';
import {useAppDispatch, useAppSelector} from "../store/hooks";
import Test from "./test";
function NotesList() {
    const notes = useAppSelector(state => state.notes.list);
    const tags = useAppSelector(state => state.tags.tags);
    const tagsArray =  tags.split(" ")
    return (
        <Grid container spacing={2}>

            {notes.map((note) => (
                (note.forHelperValue.split(" ").some(tag => tagsArray.includes(tag))


                    || tags === "") &&
                <NoteItem
                    defaultValue={note.defaultValue}
                    forHelperValue={note.forHelperValue}
                    key={note.textId}
                    textId={note.textId}
                    formHelperId={note.formHelperId}
                />

            ))}
        </Grid>
    );
}
export {NotesList}
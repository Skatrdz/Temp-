import React from "react";
import {Grid} from "@mui/material";
import NoteItem from './NoteItem';
import { useAppSelector } from "../store/hooks";
import Test from "./test";
function NotesList() {
    const notes = useAppSelector(state => state.notes.list);
    return (
        <Grid container spacing={2}>
            <Test></Test>
            {notes.map((note) => (
                <NoteItem
                    defaultValue={note.defaultValue}
                    forHelperValue={note.forHelperValue}
                    textId={note.textId}
                    formHelperId={note.formHelperId}
                />
            ))}
            {/*<NoteItem*/}
            {/*    defaultValue={"1"}*/}
            {/*    forHelperValue={"1"}*/}
            {/*    textId={"1"}*/}
            {/*    formHelperId={"1"}*/}

            {/*></NoteItem>*/}
        </Grid>
    );
}
export {NotesList}
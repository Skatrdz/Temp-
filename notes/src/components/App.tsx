import React from "react";
import {Header} from "./Header";
import {NotesList} from "./NotesList";
function App() {
    return (
        <div>
       <Header></Header>
        <NotesList></NotesList>
        </div>
    );
}
export {App}
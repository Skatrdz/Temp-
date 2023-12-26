import React, { ChangeEvent, useState } from 'react';
import {FormHelperText, Grid, TextField} from "@mui/material";
import "../css/test.css"
const ExampleComponent = () => {
    const [text, setText] = useState("");

    const handleTextChange = (event: ChangeEvent<HTMLDivElement>) => {
        setText(event.currentTarget.textContent || "");
        console.log(text)
    };

    // const renderTextWithStyle = () => {
    //     const words = text ? text.split(" ") : []; // Add a check for undefined text
    //
    //     return words.map((word, index) => (
    //         <span
    //             key={index}
    //             style={{ color: word === "Papa" ? 'red' : 'blue' }}
    //         >
    //             {word}{' '}
    //         </span>
    //     ));
    // };

    return (
        <Grid item xs={12} md={4}>

            <div className="testDiv"
            >
                <div contentEditable='true'>Title</div>
                <div contentEditable='true' onInput={handleTextChange}>
                    <span style={{ color: "red" }}>sad</span>
                    <span style={{ color: "blue" }}>sad</span>
                </div>
                <div>sda</div>
            </div>
        </Grid>
    );
}

export default ExampleComponent;
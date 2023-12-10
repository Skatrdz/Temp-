import React, { ChangeEvent, useState } from 'react';
import { FormHelperText, Grid, TextField } from "@mui/material";

const ExampleComponent = () => {
    const [text, setText] = useState("");

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const renderTextWithStyle = () => {
        const words = text.split(" ");

        return words.map((word, index) => (
            <span
                key={index}
                style={{ color: word === "Papa" ? 'red' : 'blue' }}
            >
                {word}{' '}
            </span>
        ));
    };

    return (
        <Grid item xs={12} md={4}>
            <div style={{ textAlign: 'center', border: '1px solid black', minHeight: '100px',

            }}

            >
                <input style={{border: '0px'}}

                ></input>
            </div>
        </Grid>
    );
}

export default ExampleComponent;
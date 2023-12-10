import {FormHelperText, Grid, TextField,} from "@mui/material";
import {useState} from "react";

interface NewTodoFormProps {
    defaultValue: string,
    forHelperValue: string,
    textId: string,
    formHelperId: string
}

const NoteItem: React.FC<NewTodoFormProps> =
    ({ defaultValue, forHelperValue, textId, formHelperId }) => {

        const [tags, setTags] = useState([formHelperId]);
        const [text, setText] = useState([defaultValue])

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            const extractedTags = extractTags(inputValue);
            setTags([extractedTags]);
            // @ts-ignore
        };

        const extractTags = (inputValue: string): string => {
            const regex = /#[а-яёЁА-Яa-zA-Z0-9_]+/g;
            const matches = inputValue.match(regex);
            return matches ? matches.join(' ') : '';
        };


    return (
        <Grid item xs={12} md={4}>
                <TextField
                    InputProps={{
                        style: { color: 'blue' }
                    }}
                    fullWidth
                    variant="outlined"
                    multiline
                    defaultValue={text}
                    id={textId}
                    onChange={handleInputChange}
                >

                </TextField>

                <FormHelperText id={formHelperId}>{tags}</FormHelperText>
        </Grid>
    );
};

export default NoteItem;
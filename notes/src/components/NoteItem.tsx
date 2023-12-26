import {FormHelperText, Grid, TextField,} from "@mui/material";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../store/hooks";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {changeTags, removeNote} from "../store/noteSlice";
import DeleteIcon from '@material-ui/icons/Delete';
interface NewTodoFormProps {
    defaultValue: string,
    forHelperValue: string,
    textId: string,
    formHelperId: string,
}

const NoteItem: React.FC<NewTodoFormProps> =
    ({ defaultValue, forHelperValue, textId, formHelperId }) => {
        const dispatch = useAppDispatch();
        const [tags, setTags] = useState([forHelperValue]);
        console.log(forHelperValue)
        const [text, setText] = useState([defaultValue])
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            const extractedTags = extractTags(inputValue)
            dispatch(changeTags([textId, extractedTags]
            ))
        };

        useEffect(() => {
            setTags([forHelperValue]);
        }, [forHelperValue]);
        const extractTags = (inputValue: string): string => {
            const regex = /#[а-яёЁА-Яa-zA-Z0-9_]+/g;
            const matches = inputValue.match(regex);
            return matches ? matches.join(' ') : '';
        };
        const handleRemoveNote = () => {
            dispatch(removeNote(textId));
        };


    return (
        <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    defaultValue={text}
                    id={textId}
                    onChange={handleInputChange}
                >

                </TextField>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormHelperText id={formHelperId}>{tags}</FormHelperText>
                <DeleteIcon onClick={handleRemoveNote} />
                {/*<button onClick={handleRemoveNote} >Remove</button>*/}
            </div>

        </Grid>
    );
};

export default NoteItem;
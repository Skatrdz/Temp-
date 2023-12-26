import {TextField} from "@mui/material";
import React from "react";
import {setTags} from "../store/tagsSlice";
import {useAppDispatch} from "../store/hooks";

const Search = () => {
    const dispatch = useAppDispatch();
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        dispatch(setTags(searchValue));

    };
    return <TextField

        label='search'
        variant="standard"
        type='search'
        sx={{
            mb:"1.5rem"
        }}
        onChange={handleSearch}

    />;
};

export default Search;
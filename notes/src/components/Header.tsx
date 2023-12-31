import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import Search from "./Search";
import { useAppDispatch } from "../store/hooks";
import {addNote} from "../store/noteSlice";
import {setTags} from "../store/tagsSlice";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Header() {
    const dispatch = useAppDispatch();
    const handleMenu = () => {
        console.log("1")
    }



    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>
                <Typography  onClick={() => dispatch(addNote("1"))}
                             variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Add note <LightbulbIcon />
                </Typography>
                <Search  ></Search>
            </Toolbar>
        </AppBar>
    );
}
export {Header}
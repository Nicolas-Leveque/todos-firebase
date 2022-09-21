import React from "react";
import BallotIcon from '@mui/icons-material/BallotOutlined'

export const Header = () => {
    return (
        <header>
            <BallotIcon sx={{ fontSize: 60 }}/>
            <p>Todo List Firebase</p>
        </header>
    );
};


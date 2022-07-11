import React, { useState } from 'react';
import styled from "@emotion/styled";
import { Design as DesignSettings } from "./Settings/settingsHandler";

import { LinkContainer } from "./LinkContainer/LinkContainer"
import { Searchbar } from "./Searchbar/Searchbar";
import { Settings } from "./Settings/Settings";

const Wrapper = styled.div`
    height:100%;
    margin: auto;
    position: relative;
`;

const StyledStartpage = styled.div`
    padding:0px 100px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    height:calc(100% - 100px);
`;

export const Startpage = () => {
    return (
        <Wrapper>
            <StyledStartpage>
                <LinkContainer />
            </StyledStartpage>
            <Searchbar />
            <Settings />
        </Wrapper>
    );
}
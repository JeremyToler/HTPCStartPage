import React from 'react';
import styled from "@emotion/styled";
import * as Settings from "../Settings/settingsHandler";

import google from "../../data/pictures/google.svg";
import duckduckgo from "../../data/pictures/duckduckgo.svg";

const StyledSearchbarContainer = styled.div`
    position: absolute;
    left: calc(100px - 2.9rem - 10px);
    right: 100px;
    bottom: 40px;
    height:min-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    `;
const StyledSearchbar = styled.input`
    width: 100%;
    font-size: 30pt;
    
    background-color: rgba(0,0,0,0);
    color: var(--default-color);
    transition: .3s;
    border: none;
    border-bottom: 2px solid var(--default-color);
    opacity: 0.3;
    
    ::placeholder {
        color: var(--default-color);
    }
    
    :hover, :focus {
        opacity: 1;
        outline: none;
    }
`;

const SearchIcon = styled.div<{ src: string }>`
    height: 2.9rem;
    width: 3.1rem;
    margin: auto 10px auto 0;

    background: var(--default-color);
    
    mask-size: cover;
    mask-image: url(${({ src }) => src});
`;

const Zote = [
    "Always Win Your Battles",
    "Never Let Them Laugh at You",
    "Always Be Rested",
    "Forget Your Past",
    "Strength Beats Strength",
    "Choose Your Own Fate",
    "Mourn Not the Dead",
    "Travel Alone",
    "Keep Your Home Tidy",
    "Keep Your Weapon Sharp",
    "Mothers Will Always Betray You",
    "Keep Your Cloak Dry",
    "Never Be Afraid",
    "Respect Your Superiors",
    "One Foe, One Blow",
    "Don't Hesitate",
    "Believe In Your Strength",
    "Seek Truth in the Darkness",
    "Speak Only the Truth",
    "Be Aware of Your Surroundings",
    "Abandon the Nest",
    "Identify the Foe's Weak Point",
    "Strike the Foe's Weak Point",
    "Protect Your Own Weak Point",
    "Don't Trust Your Reflection",
    "Eat As Much As You Can",
    "Don't Peer Into the Darkness",
    "Develop Your Sense of Direction",
    "Never Accept a Promise",
    "Disease Lives Inside of Dirt",
    "Names Have Power",
    "Show the Enemy No Respect",
    "Don't Eat Immediately Before Sleeping",
    "Up is Up, Down is Down",
    "Eggshells are brittle",
    "Borrow, But Do Not Lend",
    "Beware the Mysterious Force",
    "Eat Quickly and Drink Slowly",
    "Obey No Law But Your Own",
    "Learn to Detect Lies",
    "Spend Geo When You Have It",
    "Never Forgive",
    "You Can Not Breathe Water",
    "One Thing Is Not Another",
    "The World is Smaller Than You Think",
    "Make Your Own Weapon",
    "Be Careful With Fire",
    "Statues are Meaningless",
    "Don't Linger on Mysteries",
    "Nothing is Harmless",
    "Beware the Jealousy of Fathers",
    "Do Not Steal the Desires of Others",
    "If You Lock Something Away, Keep the Key",
    "Bow to No-one",
    "Do Not Dream",
    "Obey All Precepts"
]
var r = Math.floor(Math.random() * Math.floor(Zote.length))
var precept = Zote[r]

export const Searchbar = () => {
    const searchSettings = Settings.Search.getWithFallback();
    const engine: string = searchSettings?.engine || "duckduckgo.com/";

    let searchSymbol = duckduckgo;
    if (engine.startsWith("google"))
        searchSymbol = google;

    const redirectToSearch = (query: string) => {
        if (searchSettings?.fastForward[query])
            window.location.href = searchSettings.fastForward[query];
        else
            window.location.href = "https://" + engine + "?q=" + query;
    }

    return (
        <StyledSearchbarContainer>
            <SearchIcon src={searchSymbol} />
            <StyledSearchbar
                placeholder={precept}
                type="input"
                onKeyUp={e => e.which === 13 && redirectToSearch(e.currentTarget.value)}
                autoFocus={true}
            />
        </StyledSearchbarContainer>
    );
}

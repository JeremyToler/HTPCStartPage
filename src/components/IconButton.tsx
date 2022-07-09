import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled';

const StyledIconButton = styled.button<{ inverted?: boolean }>`
    color: ${({ inverted }) => (inverted ? "var(--bg-color)" : "var(--default-color)")};
    background-color: transparent;
    min-width:50px;
	font-size: 20px;
    border: none;
	opacity: 0.7;
	cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :focus{
        outline: none;
    }
    :disabled{
        opacity: 0.2;
        cursor: default;
    }

    > span{
        padding-right:10px;
    }
`;
type props =
    Partial<Pick<FontAwesomeIconProps, "icon">>
    & React.ButtonHTMLAttributes<HTMLButtonElement>
    & {
        text?: string;
        inverted?: boolean;
    };


export const IconButton = ({
    icon,
    text,
    children,
    ...props
}: props) => {
    return <StyledIconButton {...props}>
        {children && children}
        {text && <span>{text}</span>}
        {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
    </StyledIconButton>
}
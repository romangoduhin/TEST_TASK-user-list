import React from "react";


export type Id = number;

export type HandleClick = React.MouseEvent<HTMLButtonElement>

export interface Props {
    id: Id,
    onClick: (e: HandleClick, id: Id) => void
}
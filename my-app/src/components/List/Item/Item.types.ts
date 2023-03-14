import React from "react";
import {User, UserAddress, UserCompany} from "../../../redux/types";

export type Id = number;

export type HandleClick = React.MouseEvent<HTMLButtonElement>

export interface Props {
    searchValue: string,
    data: User,
    onClick: (company: UserCompany, address: UserAddress) => void,
    onRemove: (e: HandleClick, id: Id) => void
}

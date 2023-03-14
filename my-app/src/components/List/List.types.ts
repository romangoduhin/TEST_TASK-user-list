import {Status, UserAddress, UserCompany, Users} from "../../redux/types";
import React from "react";


export interface Props {
    data: Users | null,
    status: Status,
    searchValue: string,
    onItemClick: (company: UserCompany, address: UserAddress) => void,
}

export type HandleClick = React.MouseEvent<HTMLButtonElement>

export type Id = number;

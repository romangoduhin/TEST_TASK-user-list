import {Status, Users} from "../../redux/types";

export interface Props {
    data: Users | null,
    status: Status,
    searchValue: string
}

export type Id = number;

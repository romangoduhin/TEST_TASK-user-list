import {User} from "../../redux/types";

export type Id = number;

export interface Props {
    searchValue: string,
    data: User,
    onRemove: (id: Id) => void
}

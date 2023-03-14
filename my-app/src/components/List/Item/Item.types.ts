import {User} from "../../../redux/types";
import {HandleClick, Id} from "../../../globalTypes";

export interface ItemProps {
    searchValue: string,
    data: User,
    onClick: (user: User) => void,
    onRemove: (e: HandleClick, id: Id) => void,
}

import {User} from "../../redux/types";

export interface Props {
    searchValue: string,
    data: User,
    onRemove: (id: number) => void
}

import {User} from "../../redux/types";


export interface UserListProps {
    searchValue: string,
    onItemClick: (user: User) => void,
}

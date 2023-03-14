import {HandleClick, Id} from "../../../../globalTypes";

export interface RemoveButtonProps {
    id: Id,
    onClick: (e: HandleClick, id: Id) => void,
}
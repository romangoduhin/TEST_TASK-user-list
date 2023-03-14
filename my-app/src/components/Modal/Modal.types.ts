import {User} from "../../redux/types";

export type ModalProps = {
    isOpen: boolean,
    data: User | null,
    onClose: () => void,
}

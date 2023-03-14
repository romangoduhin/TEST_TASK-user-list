import React from "react";
import Portal from "./Portal/Portal";
import styles from "./Modal.module.scss";
import {ModalProps} from "./Modal.types";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import IconButton from "../IconButton/IconButton";
import ModalField from "./ModalField/ModalField";


function Modal({isOpen, data, onClose}: ModalProps): JSX.Element | null {
    if (!isOpen || !data) return null;

    const fields = [
        {
            label: "Company: ",
            value: `${data.company.name}`,
        },
        {
            label: "Address: ",
            value: `${data.address.city} ${data.address.street} ${data.address.suite} ${data.address.zipcode}`,
        },
    ]

    return (
        <Portal>
            <div className={styles.modal}>
                <div className={styles.background}/>
                <div className={styles.contentWrapper}>
                    <div className={styles.closeButtonWrapper}>
                        <IconButton src={CloseIcon} width="40px" height="40px" onClick={onClose}/>
                    </div>

                    <div className={styles.content}>
                        {fields.map(field => (
                            <ModalField key={field.value} data={field}/>
                        ))}
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
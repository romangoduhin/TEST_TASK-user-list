import React from "react";
import Portal from "./Portal/Portal";
import styles from "./Modal.module.scss";
import {Props} from "./Modal.types";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import IconButton from "../IconButton/IconButton";


function Modal({data, onClose}: Props) {
    const {address, company} = data;

    const fields = [
        {
            label: "Company: ",
            value: company?.name,
        },
        {
            label: "Address: ",
            value: `${address?.city} ${address?.street} ${address?.suite} ${address?.zipcode}`,
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
                            <p>
                                <span>{field.label}</span>
                                {field.value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
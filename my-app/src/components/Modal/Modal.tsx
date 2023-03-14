import React from "react";
import Portal from "./Portal/Portal";
import styles from "./Modal.module.scss";
import {Props} from "./Modal.types";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import IconButton from "../IconButton/IconButton";


function Modal({data, onClose}: Props) {
    const {address, company} = data;

    return (
        <Portal>
            <div className={styles.modal}>
                <div className={styles.background}/>
                <div className={styles.contentWrapper}>
                    <div className={styles.closeButtonWrapper}>
                        <IconButton src={CloseIcon} width="40px" height="40px" onClick={onClose}/>
                    </div>

                    <div className={styles.content}>
                        <p>
                            <span>Company: </span>
                            {company?.name}
                        </p>

                        <p>
                            <span>Address: </span>
                            {address?.city} {address?.street} {address?.suite} {address?.zipcode}
                        </p>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
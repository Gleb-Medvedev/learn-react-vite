import { Children } from "react";
import './Modal.css'
import { createPortal } from "react-dom";

export function Modal({ children, visible }) {
    return createPortal (
        <dialog open={visible} className="modal">{ children }</dialog>,
        document.body
    )
}
import { Children, useEffect, useRef } from "react";
import './Modal.css'
import { createPortal } from "react-dom"

export function Modal({ children, visible }) {

    const dialog = useRef();

    useEffect(() => {
        visible ? dialog.current.showModal() : dialog.current.close();
    }, [visible])

    return createPortal (
        <dialog className="modal" ref={dialog}>{ children }</dialog>,
        document.body
    )
}
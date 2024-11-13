import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export function EffectsSection() {
    const [modalVisible, setModalVisible] = useState(false);

    function showModal() {
        setModalVisible(prev => !prev)
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button text={'Show Info'} clicked={showModal} />

            <Modal visible={modalVisible}>
                <h3>Hello from Modal!</h3>
            </Modal>
        </section>
    )
}
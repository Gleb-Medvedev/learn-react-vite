import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export function EffectsSection() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <section>
            <h3>Effects</h3>

            <Button text='Open modal' clicked={() => setModalVisible(true)}/>

            <Modal visible={modalVisible}>
                <h3>Hello from Modal!</h3>
                <Button clicked={() => setModalVisible(false)}>Закрыть модалку!</Button>
            </Modal>
        </section>
    )
}
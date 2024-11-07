import { useState } from "react"
import { Button } from "../Button/Button"

export function FeedbackSection() {

    const [text, setText] = useState('');
    const [reason, setReason] = useState('suggestion');

    function inputTextChange(event) {
        setText(event.target.value)
    }

    return (
        <section style={{marginBottom: '24px'}} className="section feedback-section">
            <h3>Обратная связь</h3>
            <form>
                <label htmlFor="text" style={{marginBottom: '24px'}}>Введите текст:</label>
                <input type="text" id="text" className="input" style={{marginBottom: '24px'}} value={text} onChange={inputTextChange} />

                <label htmlFor="reason" style={{marginBottom: '24px'}}>Причина обращения</label>
                <select id="reason" style={{marginBottom: '24px'}}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggestion">Есть предложение</option>
                </select>

                <Button text={'Отправить!'} onClick={onsubmit}></Button>
            </form>
        </section>
    )
}
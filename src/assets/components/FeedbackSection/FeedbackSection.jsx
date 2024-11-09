import { useState } from "react"
import { Button } from "../Button/Button"

export function FeedbackSection() {

    const [text, setText] = useState('test value');
    const [reason, setReason] = useState('suggestion');

    const [hasError, setHasError] = useState(false)

    function inputTextChange(event) {
        setText(event.target.value)
        setHasError(event.target.value.trim().length < 2 ? true : false)
    }

    function qwe(event) {
        setReason(event.target.value);     
    }

    return (
        <section style={{marginBottom: '24px'}} className="section feedback-section">
            <h3>Обратная связь</h3>
            <form>
                <label htmlFor="text" style={{marginBottom: '24px'}}>Введите текст:</label>
                <input type="text" id="text" className="input" style={{marginBottom: '24px', outline: hasError ? '4px solid red' : 'none'}} value={text} onChange={inputTextChange} />

                <label htmlFor="reason" style={{marginBottom: '24px'}}>Причина обращения</label>
                <select id="reason" style={{marginBottom: '24px'}} value={reason} onChange={qwe}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggestion">Есть предложение</option>
                </select>
                <hr />
                <br />
                <div>
                    {text}
                </div>
                <hr />
                <div>
                    {reason}
                </div>
                <br />


                <Button disabled={hasError}>{!hasError ? 'Отправить' : 'Хуюшки!'}</Button>
            </form>
        </section>
    )
}
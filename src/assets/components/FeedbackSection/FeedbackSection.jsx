import { useState } from "react"
import { Button } from "../Button/Button"

export function FeedbackSection() {

    // const [text, setText] = useState(null);                  Пиши всегда стейты по отдельности, как тут! Залупа использования useStat'a в виде объекта снизу - просто пример!
    // const [reason, setReason] = useState('suggestion');      Пиши всегда стейты по отдельности, как тут! Залупа использования useStat'a в виде объекта снизу - просто пример!
    // const [hasError, setHasError] = useState(true)           Пиши всегда стейты по отдельности, как тут! Залупа использования useStat'a в виде объекта снизу - просто пример!

    const [form, setForm] = useState({
        text: '',
        reason: 'suggestion',
        hasError: true
    })

    function inputTextChange(event) {
        setForm({
            text: event.target.value,
            reason: form.reason,
            hasError: event.target.value.trim().length < 2 ? true : false,
        })

        // setText(event.target.value)
        // setHasError(!text || event.target.value.trim().length < 2 ? true : false)
    }

    function selectValueChange(event) {
        setForm({
            text: form.text,
            reason: event.target.value,
            hasError: form.hasError
        })
        // setReason(event.target.value)
    }

    function toggleError() {
        setForm({
            text: form.text,
            reason: form.reason,
            hasError: prev => !prev,
        })
        // setHasError(prev => !prev)
    }

    return (
        <section style={{marginBottom: '24px'}} className="section feedback-section">
            <h3>Обратная связь</h3>

            <Button clicked={toggleError}>Toggle Error</Button>

            <form>
                <label htmlFor="text" style={{marginBottom: '24px'}}>Введите текст:</label>
                <input
                    type="text"
                    id="text"
                    className="input"
                    placeholder="введите текст..."
                    style={{marginBottom: '24px', outline: form.hasError ? '4px solid red' : 'none'}}
                    value={form.text}
                    onChange={inputTextChange}
                />

                <label htmlFor="reason" style={{marginBottom: '24px'}}>Причина обращения</label>
                <select id="reason" style={{marginBottom: '24px'}} value={form.reason} onChange={selectValueChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggestion">Есть предложение</option>
                </select>
                <hr />
                <br />
                <div>
                    {form.text}
                </div>
                <hr />
                <div>
                    {form.reason}
                </div>
                <br />


                <Button disabled={form.hasError}>{!form.hasError ? 'Отправить' : 'Хуюшки!'}</Button>
            </form>
        </section>
    )
}
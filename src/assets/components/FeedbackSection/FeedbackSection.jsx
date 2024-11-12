import { useState, useRef } from "react"
import { Button } from "../Button/Button"

function StateVsRef() {
    const input = useRef(); //лайфсайкл Хук, который не вызывает ре-рендер компонента из-за изменений.
                            //См в ИНПУТ с пропом "ref"
                            // вывод текста происходит 1 раз после неажатия энтера
                            // т.е. компонент перерисовался только когда я этого захотел
                            // но при этом значения записываются (вроде бы)

    // const [inputValue, setInputValue] = useState('');
    const [visible, setVisible] = useState(false);

    
    

    function showText(event) {
        if (event.key === 'Enter') {
            setVisible(true)
        }
    }

    // function changeAndHideText(event) {
    //     setInputValue(event.target.value);
    //     setVisible(false);
    // }
    return (
        <div style={{marginTop: '24px'}}>
            <h3>Input value: {visible && input.current?.value}</h3>
            <input
                type="text"
                style={{width: '100%', padding: '8px 12px', border: '1px bottom black', outline: 'none', marginTop: '24px'}}
                // value={inputValue}
                // onChange={changeAndHideText}
                onKeyDown={showText}
                ref={input}
            />
        </div>
    )
}

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
                <br />
                <select id="reason" style={{marginBottom: '24px'}} value={form.reason} onChange={selectValueChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggestion">Есть предложение</option>
                </select>
                <br />
                <Button disabled={form.hasError}>{!form.hasError ? 'Отправить' : 'Хуюшки!'}</Button>
                <hr />
                <StateVsRef />
            </form>
            
        </section>
    )
}
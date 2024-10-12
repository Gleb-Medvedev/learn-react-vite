import { Children } from 'react'
import './Button.css'

export function Button({ children }) {

    function checkClick() {
        console.log(`Нажал кнопку`);        
    }

    return <button className="btn-regular" onClick={checkClick}>{ children }</button>
}
import './Header.css'
import { useEffect, useRef, useState } from 'react';

export function Header() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(function() {
            setDate(new Date());
        }, 1000)

        return function() {
            clearInterval(interval);
        }     
    }, [])

    const time = useRef();

    return (
        <header className='header section'>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="изображение логотипа" />
            <span ref={time}>Время сейчас: {date.toLocaleTimeString()}</span>
        </header>
    )
}
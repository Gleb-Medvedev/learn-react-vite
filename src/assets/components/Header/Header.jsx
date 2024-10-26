import './Header.css'
import { useState } from 'react';

export function Header() {

    const [date, setDate] = useState(new Date());

    setInterval(() => setDate(new Date()), 1000);


    return (
        <header>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="изображение логотипа" />
            <span>Время сейчас: {date.toLocaleTimeString()}</span>
        </header>
    )
}

// date.toLocaleTimeString()
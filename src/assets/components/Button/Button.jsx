import { Children } from 'react';
import './Button.css'

export function Button({ text, children, clicked, toggleActiveClassName }) { //Здесь PROPS вписаны сразу как атрибуты функции,
                                                                            //вместо объявления константы с деструктуризацией
    // Расшифровка:

    //Здесь "Children" - это PROP, благодаря которому мы получаем текст между открывающим/закрывающим тегами кнопки
    // (СМ. DifferencesSection.jsx, а именно отличия в компонентах кнопки)

    //Text - обычный проп для получения текста в кнопке "как обычно"
    //clicked - PROP компонента, которому ты присваиваешь ФУНКЦИЮ (в DifferencesSection.jsx)

    //toggleActiveClassName - проверка на наличие className'a 'Active' (см DifferencesSection.jsx)

    let btnClasses = 'btn-regular';

    return <button className={toggleActiveClassName ? btnClasses += ' active' : btnClasses} onClick={clicked}>{ text ? text : children }</button>
}
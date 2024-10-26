import { Children } from 'react'
import './Button.css'
// import { useState } from 'react';

export function Button({ children, text, clicked }) { //Здесь PROPS вписаны сразу как атрибуты функции, вместо объявления константы с деструктуризацией
    // Расшифровка:

    //Здесь "Children" - это PROP, благодаря которому мы получаем текст между открывающим/закрывающим тегами кнопки
    // (СМ. App.jsx, а именно отличия в компонентах кнопки)

    //Text - обычный проп для получения текста в кнопке "как обычно"
    //clicked - PROP компонента, которому ты присваиваешь ФУНКЦИЮ

    return <button className='btn-regular' onClick={clicked}>{ text ? text : children }</button>
}
import { Children, useState } from 'react';
import classes from './Button.module.css'

console.log(classes);


export function Button({ text, children, clicked, toggleActiveClassName, ...props }) { //Здесь PROPS вписаны сразу как атрибуты функции,
                                                                            //вместо объявления константы с деструктуризацией
                                                                            // "...props" оператор REST - по сути делает так, что
                                                                            // любой объявленный ПРОП (смотри FeedbackSection в параметр "disabled"
                                                                            //будет присвоен "сам себе".
                                                                            // т.е. это то же самое, что и "disabled = {disabled}"
                                                                            //где первый "disabled" - это "привычный" параметр кнопки
                                                                            //а второй - уже сам ПРОП
    // Расшифровка:

    //Здесь "Children" - это PROP, благодаря которому мы получаем текст между открывающим/закрывающим тегами кнопки
    // (СМ. DifferencesSection.jsx, а именно отличия в компонентах кнопки)

    //Text - обычный проп для получения текста в кнопке "как обычно"
    //clicked - PROP компонента, которому ты присваиваешь ФУНКЦИЮ (в DifferencesSection.jsx)

    //toggleActiveClassName - проверка на наличие className'a 'Active' (см DifferencesSection.jsx)

    // let btnClasses = 'btn-regular';

    return <button className={toggleActiveClassName ? `${classes.btn} ${classes.active}` : classes.btn} onClick={clicked} {...props}>{ text ? text : children }</button>
}
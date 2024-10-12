import './Header.css'
// import logo from '/public/logo-name.svg'

export function Header() {

    const date = new Date();

    return (
        <header>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="изображение логотипа" />
            <span>Время сейчас: {date.toLocaleTimeString()}</span>
        </header>
    )
}
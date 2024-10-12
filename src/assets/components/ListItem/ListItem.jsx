import "./ListItem.css";
import "./../Button/Button"

export function ListItem({ main, secondary, id }) {  //Сокращенная запись, где сразу "придумал" названия пропсов и вписал их в аргумент компонента,
                                                    //  используя фигурные фигурные скобки, так как это динамический контент!

    // const { main, secondary, id } = props
    // "Стандартная запись с "придумыванием" названий пропертисов (пропсов),
    // их деструктуризацией и присвоем объекта или массива с деструктуризацией объекту пропс (это объект!)

    return (
        <li className="list-item" data-id={id}>
            <p>
                <strong>{main}</strong>{secondary}
            </p>
        </li>
    )
}
import { ways } from "../../../data"
import { ListItem } from "../ListItem/ListItem"

export function ListSection() {
    return (
        <section className="section list-section">
            <h3>Наш подход к обучению:</h3>
            <ul className="zaloopa">
                {
                ways.map(item => {
                    return (
                    <ListItem main={item.title} secondary={item.description} key={item.id} id={item.id}/>
                    )
                })
                }
            </ul>
        </section>
    )
}
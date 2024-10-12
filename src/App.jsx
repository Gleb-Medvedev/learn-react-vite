import { Header } from "./assets/components/Header/Header"
import { ListItem } from "./assets/components/ListItem/ListItem"
import { ways } from "./data"
import { Button } from "./assets/components/Button/Button"

export default function App() {

  return (
    <div>
      <Header />
      <main>
        <section>
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

        <section>
          <h3>Чем мы отличаемся от других?</h3>
              <Button>раз</Button>
              <Button>два</Button>
              <Button>три</Button>
        </section>
      </main>
    </div>
  )
}
import { Header } from "./assets/components/Header/Header"
import { ListItem } from "./assets/components/ListItem/ListItem"
import { ways } from "./data"
import { Button } from "./assets/components/Button/Button"
import { useState } from "react"

export default function App() {
  const [tabsContent, setTabsContent] = useState('Press the Button!');
  //первый элемент в деструктуризации - стартовое значение. Оно же указано после присвоения в параметрах "useState"

  //второй элемент деструктуризации - ЭТО ФУНКЦИЯ! (Смотри ниже handleClick) - в её аргументах ты передаешь значение после изменения состояния!
  //В нашем примере после клика "tabsContent" меняется на значение "setTabsContent" (его аргумент)

  function handleClick(type) {
    setTabsContent(type)
  }

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
              <Button clicked={() => handleClick('way')}>раз</Button>
              {/* "привычная" из HTML запись контента "между открывающим/закрывающим тегами" компонента. */}
              {/* Текст между тегами тоже своебразный PROP. Чтобы работало - в компоненте, в котором будет этот текст,
              сделать "import { Children } from 'react' "
              и передать Children в PROP компонента */}

              <Button text="Два" clicked={() => handleClick('easy')}/>
              {/* запись, которой учат "изначально" */}

              <Button clicked={() => handleClick('programm')}>три</Button>  
              {/* В компоненте кнопки выше в PROP (который написан в самом компоненте
              передана анонимная функция (ЗАМЫКАНИЕ), которая выполняет то же самое, что и "clicked={handleClick}"*/}

              <p className="tabs-content">{ tabsContent }</p>
        </section>
      </main>
    </div>
  )
}
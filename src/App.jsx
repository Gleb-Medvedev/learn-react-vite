import { Header } from "./assets/components/Header/Header"
import { ListItem } from "./assets/components/ListItem/ListItem"
import { ways } from "./data"
import { differences } from "./data"
import { Button } from "./assets/components/Button/Button"
import { useState } from "react"

export default function App() {
  const [tabsContent = 'Нет данных для отображения!', setTabsContent] = useState('Press the Button!');
  //первый элемент в деструктуризации - стартовое значение. Оно же указано после присвоения в параметрах "useState"

  //второй элемент деструктуризации - ЭТО ФУНКЦИЯ! (Смотри ниже handleClick) - в её аргументах ты передаешь значение после изменения состояния!
  //В нашем примере после клика "tabsContent" меняется на значение "setTabsContent" (его аргумент)




  // function handleClick(type) {  //Старая функция для табов. Получала проп "инлайн", который был записан ниже в самом Button компоненте.
                                  // Сейчас (функция ниже) для каждого ключа из объекта "Differences" генерируется кнопка, а текст кнопки соответствует ключу из массива
  //   setTabsContent(type)
  // }

  function btnClick({key}) {
    setTabsContent(key)
    event.target.classList.contains('active') ? event.target.classList.remove('active') : event.target.classList.add('active');
  }
  // event.target.classList.contains('active') ? event.target.classList.remove('active') : event.target.classList.add('active');

  

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
              <div className="buttons-container">
              {
                Object.keys(differences).map((key, index) => {  //Создаёт кнопку для каждого ключа из массива "diffenrences" и устанавливает ей текст
                                                                //По клику на ту или иную кнопку отображает соответствующий ключу из массива "diffenrences" контент
                                                                //Табы, короче -_-
                  return (
                    <Button clicked={() => btnClick({key})} key={index}>{ key }</Button>  //событие clicked - это PROP из компонента Button!
                                                                                          //По событию onClick выполняется именно "clicked" (смотри Button компонент)
                                                                                          //Замыканием(?) в "btnClicked" (см тут выше) передаётся и обрабатывается PROP "key"
                  )
                })
              }
              </div>

              {/* <Button clicked={() => handleClick('way')}>раз</Button> */}  
              {/* "привычная" из HTML запись контента "между открывающим/закрывающим тегами" компонента. */}
              {/* Текст между тегами тоже своебразный PROP. Чтобы работало - в компоненте, в котором будет этот текст,
              сделать "import { Children } from 'react' "
              и передать Children в PROP компонента */}

              {/* <Button text="Два" clicked={() => handleClick('easy')}/> */}
              {/* запись, которой учат "изначально" */}

              {/* <Button clicked={() => handleClick('programm')}>три</Button>   */}
              {/* В компоненте кнопки выше в PROP (который написан в самом компоненте
              передана анонимная функция (ЗАМЫКАНИЕ), которая выполняет то же самое, что и "clicked={handleClick}"*/}


              <p className="tabs-content">{ differences[tabsContent] ? differences[tabsContent] : tabsContent}</p>

              
        </section>
      </main>
    </div>
  )
}
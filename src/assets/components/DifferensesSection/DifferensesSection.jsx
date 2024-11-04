import { differences } from "../../../data"
import { Button } from "../Button/Button"
import { useState } from "react"


export function DifferencesSection() {
    const [tabsContent, setTabsContent] = useState('Press the Button!');

    //первый элемент в деструктуризации - стартовое значение. Значение этого "стартового значения" указано после присвоения в аргументах "useState"

    //второй элемент деструктуризации - ЭТО ФУНКЦИЯ! (Смотри ниже handleClick) - в её аргументах ты передаешь значение, которым станет изначальное значение
    //В нашем примере после клика "tabsContent" меняется на значение "setTabsContent" (его аргумент)

    function btnClick({key}) {
        setTabsContent(key)
      }

    // function handleClick(type) {  //Старая функция для табов. Получала проп "инлайн", который был записан в самом Button компоненте.
                                    // Сейчас (функция ниже) для каждого ключа из объекта "Differences" генерируется кнопка, а текст кнопки соответствует ключу из массива
    //   setTabsContent(type)
    // }

    return (
        <section className="section differenses-section">
          <h3>Чем мы отличаемся от других?</h3>
              <div className="buttons-container">
              {
                Object.keys(differences).map((key, index) => {  //Создаёт кнопку для каждого ключа из массива "diffenrences" и "циклом" устанавливает ей текст из каждого ключа
                                                                //По клику на ту или иную кнопку отображает соответствующий ключу из массива "diffenrences" контент
                                                                //Табы, короче -_-
                  return (
                    <Button toggleActiveClassName={tabsContent === key} clicked={() => btnClick({key})} key={index}>{ key }</Button> 
                                                                                          //событие clicked - это PROP из компонента Button!
                                                                                          //По событию onClick выполняется именно "clicked" (смотри Button компонент)
                                                                                          //Замыканием(?) в "btnClicked" (см тут выше) передаётся и обрабатывается PROP "key"
                                                                                          // isActive - это PROP из Button.
                                                                                          // Если ключ из объекта Differenses === ключу (считай тексту кнопки) -
                                                                                          // этой кнопке устанавливается класс 'active'
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


              {/* <p className="tabs-content">{ differences[tabsContent] ? differences[tabsContent] : tabsContent}</p> */}

              {/* тернарником выводится соответствующий ключ из объекта "differenses" (если ключ === тексту кнопки) или же tabsContent,
              заданный по-умолчаю в "useState" */}



              {!differences[tabsContent] && <p>{tabsContent}</p>}
              {differences[tabsContent] && <p>{differences[tabsContent]}</p>}
              {/* Абсолютно придурочная запись в 2 строки. Когда проще сделать тернарником.
              (Не уверен в правильности использования тернарника, но это же просто ванильный JS.) ХЗ */}

              
        </section>
    )
}
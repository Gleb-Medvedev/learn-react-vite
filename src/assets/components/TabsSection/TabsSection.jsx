import { Button } from "../Button/Button";

export function TabsSection({current, transferProp}) {

    return (
        <div className="buttons" style={{marginBottom: '24px'}}>
            <Button text='main' toggleActiveClassName={current === 'main'} clicked={() => transferProp('main')}></Button>
            <Button text='feedback' toggleActiveClassName={current === 'feedback'} clicked={() => transferProp('feedback')}></Button>
            <Button text='effect' toggleActiveClassName={current === 'effect'} clicked={() => transferProp('effect')}></Button>
        </div>
    )
}
// import { useState } from "react";
import { Button } from "../Button/Button";

export function TabsSection({ active, transferProp }) {
    return (
        <div className="buttons" style={{marginBottom: '24px'}}>
            <Button isActive={active === 'main'} text={'main'} clicked={() => transferProp('main')}></Button>
            <Button isActive={active === 'feedback'} text={'feedback'} clicked={() => transferProp('feedback')}></Button>
        </div>
    )
}
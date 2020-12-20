import { useState } from 'react'
import PresenterNameList from '../molecules/PresenterNameList'
import { Button } from '../atoms/button/button'

interface Props {
    name_list: string[]
    add_presenter_cb: (name: string) => void
    del_presenter_cb: (index: number) => void
    suffle_start_cb: () => void
}

const DisplayStatusInputWait = (props: Props) => {
    const { name_list, add_presenter_cb, del_presenter_cb, suffle_start_cb } = props;

    return (
        <>
            {
                <>
                    <PresenterNameList name_list={name_list} del_presenter={del_presenter_cb} />
                    <Button name={"Add!"} handleonclick={() => { add_presenter_cb("aaa") }} />
                    <Button name={"Shuffle!"} handleonclick={() => { suffle_start_cb() }} />
                </>
            }

        </>
    )
}

export default DisplayStatusInputWait;

import { useState, useEffect } from 'react'
import ShuffleNameList from '../molecules/ShuffleNameList'
import { Button } from '../atoms/button/button'

interface Props {
    name_list: string[]
    page_back_cb: () => void
}

const DisplayStatusShuffle = (props: Props) => {
    const SHUFFLE_MAX = 10;
    const { name_list, page_back_cb } = props;
    const [shuffle_cnt, setShuffleCnt] = useState(0);
    const [shuffle_name_list, setShuffleNameList] = useState([...name_list]);

    useEffect(() => {
        if (shuffle_cnt < SHUFFLE_MAX) {
            setTimeout(() => { shuffle() }, 400);
        }
    }, [shuffle_name_list])

    const shuffle = () => {
        setShuffleCnt(shuffle_cnt + 1);

        let tmpNameList = [...shuffle_name_list];

        let n = shuffle_name_list.length;
        let src = Math.floor(Math.random() * n);
        let dst = Math.floor(Math.random() * n);

        let tmp = tmpNameList[src];
        tmpNameList[src] = tmpNameList[dst];
        tmpNameList[dst] = tmp;

        setShuffleNameList(tmpNameList);
    }

    return (
        <>
            {
                <>
                    {shuffle_cnt === SHUFFLE_MAX ?
                        <h2 className="m-5">決定!</h2>
                        : <h2 className="m-5">Shuffle Time!</h2>
                    }
                    {shuffle_name_list != undefined ?
                        <ShuffleNameList name_list={shuffle_name_list} />
                        : <div></div>
                    }
                    {shuffle_cnt === SHUFFLE_MAX ?
                        <Button name={"Back"} handleonclick={() => { page_back_cb() }} />
                        : <div></div>
                    }
                </>
            }
        </>
    );
}

export default DisplayStatusShuffle;

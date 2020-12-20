import { useState, useEffect } from 'react'
import ShuffleNameList from '../molecules/ShuffleNameList'
import { Button } from '../atoms/button/button'

interface Props {
    nameList: string[];             //プレゼンタ一覧         
    pageBackCb: () => void;         //入力待ちに戻るコールバック
}

// シャッフル状態表示
const DisplayStatusShuffle = (props: Props) => {
    const SHUFFLE_MAX = 10;                              //シャッフルの回数
    const { nameList, pageBackCb } = props;
    const [shuffleCnt, setShuffleCnt] = useState(0);    //シャッフルカウンタ
    const [shuffleNameList, setShuffleNameList] = useState([...nameList]);      //シャッフルユーザリスト

    // シャッフルプレゼンタリストの更新をトリガに再度シャッフル
    useEffect(() => {
        if (shuffleCnt < SHUFFLE_MAX) {
            setTimeout(() => { shuffle() }, 400);
        }
    }, [shuffleNameList])

    // シャッフル処理
    const shuffle = () => {
        // シャッフル回数インクリメント
        setShuffleCnt(shuffleCnt + 1);

        let tmpNameList = [...shuffleNameList];

        // ランダムな配列のインデックスを入れ替える
        let n = shuffleNameList.length;
        let src = Math.floor(Math.random() * n);
        let dst = Math.floor(Math.random() * n);

        let tmp = tmpNameList[src];
        tmpNameList[src] = tmpNameList[dst];
        tmpNameList[dst] = tmp;

        // シャッフルユーザリスト更新
        setShuffleNameList(tmpNameList);
    }

    return (
        <>
            {
                <>
                    {shuffleCnt === SHUFFLE_MAX ?
                        <h2 className="m-5">決定!</h2>
                        : <h2 className="m-5">Shuffle Time!</h2>
                    }
                    {shuffleNameList != undefined ?
                        <ShuffleNameList nameList={shuffleNameList} />
                        : <div></div>
                    }
                    {shuffleCnt === SHUFFLE_MAX ?
                        <Button name={"Back"} handleOnClick={() => { pageBackCb() }} />
                        : <div></div>
                    }
                </>
            }
        </>
    );
}

export default DisplayStatusShuffle;

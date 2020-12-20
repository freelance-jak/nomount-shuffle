import PresenterNameList from '../molecules/PresenterNameList'
import { Button } from '../atoms/button/button'
import { AddPresenterForm } from '../molecules/AddPresenterForm'

interface Props {
    nameList: string[];                         //プレゼンタ一覧
    addPresenterCb: (name: string) => void      //プレゼンタ登録コールバック
    delPresenterCb: (index: number) => void     //プレゼンタ削除コールバック
    suffleStartCb: () => void                   //シャッフル開始コールバック
}

// 入力待ち状態表示
const DisplayStatusInputWait = (props: Props) => {
    const { nameList, addPresenterCb, delPresenterCb, suffleStartCb } = props;

    return (
        <>
            {
                <>
                    <AddPresenterForm handleOnClick={addPresenterCb} />
                    <PresenterNameList nameList={nameList} delPresenter={delPresenterCb} />

                    <br />
                    <Button name={"Shuffle!"} handleOnClick={() => { suffleStartCb() }} />
                </>
            }

        </>
    )
}

export default DisplayStatusInputWait;

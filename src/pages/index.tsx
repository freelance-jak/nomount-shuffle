import { useState } from 'react'
import DisplayStatusInputWait from '../components/organisms/DisplayStatusInputWait'
import DisplayStatusShuffle from '../components/organisms/DisplayStatusShuffle'

// 表示状態
enum ENM_SHUFFLE_STATUS {
  ENM_INPUT_WAIT = 0,   //プレゼンタ入力状態
  ENM_SHUFFLE           //シャッフル状態
}

// トップページ
const Home = () => {
  // 表示状態
  const [status, setStatus] = useState(ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT);
  // プレゼンタ名前一覧
  const [nameList, setNameList] = useState(["aaa", "bbb", "ccc"] as string[]);

  // プレゼンタ追加
  const addPresenter = (name: string) => {
    const tmpNameList = [...nameList];
    tmpNameList.push(name);
    setNameList(tmpNameList);
  }
  // プレゼンタ削除
  const delPresenter = (index: number) => {
    const tmpNameList = [...nameList];
    tmpNameList.splice(index, 1);
    setNameList(tmpNameList);
  }

  // シャッフル開始
  const suffleStart = () => {
    setStatus(ENM_SHUFFLE_STATUS.ENM_SHUFFLE);
  }
  // トップ画面に戻る
  const pageBack = () => {
    setStatus(ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT);
  }

  return (
    <div className="m-6">
      <h1>Shuffle!</h1>
      {status === ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT ?
        <DisplayStatusInputWait nameList={nameList} addPresenterCb={addPresenter} delPresenterCb={delPresenter} suffleStartCb={suffleStart} />
        : <DisplayStatusShuffle nameList={nameList} pageBackCb={pageBack} />}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

import { useState } from 'react'
import PresenterNameList from '../components/molecules/PresenterNameList'
import ShuffleNameList from '../components/molecules/ShuffleNameList'

enum ENM_SHUFFLE_STATUS {
  ENM_INPUT_WAIT = 0,
  ENM_SHUFFLE
}

const Home = () => {
  let [status, setStatus] = useState(ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT);
  const namelist: string[] = ["aaa", "bbb"]

  const DisplayStatusInputWait = () => {
    return (
      <>
        <PresenterNameList name_list={namelist} />
        <button className="m-6" onClick={() => { setStatus(ENM_SHUFFLE_STATUS.ENM_SHUFFLE) }}>Shuffle Start!</button>
      </>
    )
  }
  const DisplayStatusShuffle = () => {
    return (
      <>
        <ShuffleNameList name_list={namelist} />
        <button className="m-6" onClick={() => { setStatus(ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT) }}>back</button>
      </>
    )
  }
  return (
    <div className="m-6">
      <h2>Shuffle!</h2>
      {status === ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT ? DisplayStatusInputWait() : DisplayStatusShuffle()}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

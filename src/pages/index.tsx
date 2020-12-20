import { useState } from 'react'
import DisplayStatusInputWait from '../components/organisms/DisplayStatusInputWait'
import DisplayStatusShuffle from '../components/organisms/DisplayStatusShuffle'

enum ENM_SHUFFLE_STATUS {
  ENM_INPUT_WAIT = 0,
  ENM_SHUFFLE
}

const Home = () => {
  const [status, setStatus] = useState(ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT);
  const [name_list, setNameList] = useState(["aaa", "bbb", "cccc"]);

  const AddPresenter = (name: string) => {
    const tmp_name_list = [...name_list];
    tmp_name_list.push(name);
    setNameList(tmp_name_list);
  }
  const DelPresenter = (index: number) => {
    const tmp_name_list = [...name_list];
    tmp_name_list.splice(index, 1);
    setNameList(tmp_name_list);
  }

  const SuffleStart = () => {
    setStatus(ENM_SHUFFLE_STATUS.ENM_SHUFFLE);
  }
  const PageBack = () => {
    setStatus(ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT);
  }
  return (
    <div className="m-6">
      <h2>Shuffle!</h2>
      {status === ENM_SHUFFLE_STATUS.ENM_INPUT_WAIT ?
        <DisplayStatusInputWait name_list={name_list} add_presenter_cb={AddPresenter} del_presenter_cb={DelPresenter} suffle_start_cb={SuffleStart} /> : <DisplayStatusShuffle name_list={name_list} page_back_cb={PageBack} />}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

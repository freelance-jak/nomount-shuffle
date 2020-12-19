import PresenterNameList from '../components/molecules/PresenterNameList'

const Home = () => {
  const namelist: string[] = ["aaa", "bbb"]
  return (
    <>
      <div>sapmle</div>
      <PresenterNameList name_list={namelist} />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

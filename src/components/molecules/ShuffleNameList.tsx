import { PresenterNameText } from "../atoms/PresenterNameText";

interface Props {
  nameList: string[]; //名前リスト
}

// シャッフル名リスト
export const ShuffleNameList = (props: Props) => {
  const { nameList } = props;

  return (
    <>
      {nameList.map((name: string, index: number) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="flex m-3">
            <PresenterNameText text={`${index + 1} - ${name}`} />
          </div>
        );
      })}
    </>
  );
};

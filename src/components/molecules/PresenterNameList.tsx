import IconButton, { ENM_ICON } from "../atoms/IconButton";
import { PresenterNameText } from "../atoms/PresenterNameText";

interface Props {
  nameList: string[]; //プレゼンタ名リスト
  delPresenter: (index: number) => void; //プレゼンタ削除
}

export const PresenterNameList = (props: Props) => {
  const { nameList, delPresenter } = props;
  return (
    <>
      {nameList.map((name: string, index: number) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="flex m-3">
            <PresenterNameText text={`${index + 1} - ${name}`} />
            <IconButton
              iconType={ENM_ICON.ENM_ICON_MINUS}
              onClickCb={() => {
                delPresenter(index);
              }}
            />
          </div>
        );
      })}
    </>
  );
};

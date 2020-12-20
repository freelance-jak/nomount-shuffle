import PresenterNameText from '../atoms/PresenterNameText'
import IconButton, { ENM_ICON } from '../atoms/IconButton'

interface Props {
    nameList: string[];                     //プレゼンタ名リスト
    delPresenter: (index: number) => void;  //プレゼンタ削除
}

const PresenterNameList = (props: Props) => {
    const { nameList, delPresenter } = props;
    return (
        <>
            {
                nameList.map((name: string, index: number) => {
                    return (
                        <div className="flex m-3">
                            <PresenterNameText text={`${index + 1} - ${name}`} />
                            <IconButton iconType={ENM_ICON.ENM_ICON_MINUS} onClickCb={() => { delPresenter(index); }} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default PresenterNameList;

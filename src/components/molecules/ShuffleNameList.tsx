import PresenterNameText from '../atoms/PresenterNameText'

interface Props {
    nameList: string[];     //名前リスト
}

// シャッフル名リスト
const ShuffleNameList = (props: Props) => {
    const { nameList } = props;

    return (
        <>
            {
                nameList.map((name: string, index: number) => {
                    return (
                        <div className="flex m-3">
                            <PresenterNameText text={`${index + 1} - ${name}`} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default ShuffleNameList;

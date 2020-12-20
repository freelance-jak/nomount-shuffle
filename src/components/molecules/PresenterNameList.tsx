import PresenterNameText from '../atoms/PresenterNameText'
import IconButton, { ENM_ICON } from '../atoms/IconButton'

interface Props {
    name_list: string[];
    del_presenter: (index: number) => void;
}

const PresenterNameList = (props: Props) => {
    const { name_list, del_presenter } = props;
    return (
        <>
            {
                name_list.map((name: string, index: number) => {
                    return (
                        <div className="flex m-3">
                            <PresenterNameText text={`${index + 1} - ${name}`} />
                            <IconButton icon_type={ENM_ICON.ENM_ICON_MINUS} onclick_cb={() => { del_presenter(index); }} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default PresenterNameList;

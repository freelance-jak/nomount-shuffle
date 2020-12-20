import PresenterNameText from '../atoms/PresenterNameText'
import IconButton, { ENM_ICON } from '../atoms/IconButton'

interface Props {
    name_list: string[];
}

const PresenterNameList = (props: Props) => {
    let { name_list } = props;
    return (
        <>
            {
                name_list.map((name: string, index: number) => {
                    return (
                        <div className="flex m-3">
                            <PresenterNameText text={`${index + 1} - ${name}`} />
                            <IconButton icon_type={ENM_ICON.ENM_ICON_MINUS} onclick_cb={() => { alert("aaa") }} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default PresenterNameList;

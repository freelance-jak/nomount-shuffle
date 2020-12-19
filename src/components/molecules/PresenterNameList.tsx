import PresenterNameText from '../atoms/PresenterNameText'
import IconBotton, { ENM_ICON } from '../atoms/IconBotton'

interface Props {
    name_list: string[];
}

const PresenterNameList = (props: Props) => {
    return (
        <>
            {
                props.name_list.map((name: string) => {
                    return (
                        <div className="flex m-4">
                            <PresenterNameText text={name} />
                            <IconBotton icon_type={ENM_ICON.ENM_ICON_MINUS} onclick_cb={() => { alert("aaa") }} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default PresenterNameList;

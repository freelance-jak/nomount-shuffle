// ICON種別
export enum ENM_ICON {
    ENM_ICON_MINUS = "-"
}

interface Props {
    iconType: ENM_ICON;             //ICON種別
    onClickCb: () => void           //ICONボタン押下時のコールバック
}

//ICONボタン
const IconButton = (props: Props) => {
    // ICON種別毎の表示内容分岐
    const getIconStyle = (type: ENM_ICON) => {
        switch (type) {
            // マイナスボタンの場合
            case ENM_ICON.ENM_ICON_MINUS:
                return (
                    <button className="transform scale-50 rounded-2xl w-7 border-solid border-black border bg-gray-300 hover:bg-gray-400 focus:outline-none" onClick={() => { props.onClickCb() }}>―</button>
                )
        }
    }

    return (
        <>
            {getIconStyle(props.iconType)}
        </>
    );
}

export default IconButton;

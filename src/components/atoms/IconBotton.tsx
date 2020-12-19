export enum ENM_ICON {
    ENM_ICON_MINUS = "-"
}

type OnClickFunctionType = () => void;

interface Props {
    icon_type: ENM_ICON;
    onclick_cb: OnClickFunctionType
}

const IconBotton = (props: Props) => {
    const getIconStyle = (type: ENM_ICON) => {
        switch (type) {
            case ENM_ICON.ENM_ICON_MINUS:
                return (
                    <button className="rounded-2xl w-7 border-solid border-black border hover:bg-red-700 focus:outline-none" onClick={() => { props.onclick_cb() }}>―</button>
                )
        }
    }

    return (
        <>
            {getIconStyle(props.icon_type)}
        </>
    );
}

export default IconBotton;

interface Props {
    text: string;
}

const PresenterNameText = (props: Props) => {
    return (
        <label className="w-1/5">
            {`・${props.text}`}
        </label>
    );
}

export default PresenterNameText;

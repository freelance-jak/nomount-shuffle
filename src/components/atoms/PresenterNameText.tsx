interface Props {
    text: string;
}

const PresenterNameText = (props: Props) => {
    return (
        <label className="w-1/6">
            {`・${props.text}`}
        </label>
    );
}

export default PresenterNameText;

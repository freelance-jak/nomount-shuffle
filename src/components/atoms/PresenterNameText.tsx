interface Props {
  text: string; //プレゼンタ名
}

export const PresenterNameText = (props: Props) => {
  return <label className="w-1/6">{`・${props.text}`}</label>;
};

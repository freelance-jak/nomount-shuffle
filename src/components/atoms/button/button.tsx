interface Props {
  name: string;
  handleOnClick: () => void;
}

export const Button = (props: Props) => {
  const handleOnClick = () => {
    props.handleOnClick();
  };

  return (
    <button onClick={handleOnClick} className="w-20 h-9 border-black border-2 rounded-2xl">
      {props.name}
    </button>
  );
};

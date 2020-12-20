interface Props {
  name: string;
  handleOnClick: () => void;
}

export const Button = (props: Props) => {
  const handleOnClick = () => {
    props.handleOnClick();
  };

  return (
    <button onClick={handleOnClick} className="w-20 h-9 rounded-2xl bg-red-400 hover:bg-red-500 focus:outline-none text-white">
      {props.name}
    </button>
  );
};

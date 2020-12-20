interface Props {
  name: string;
  handleonclick: () => void;
}

export const Button = (props: Props) => {
  const handleonclick = () => {
    props.handleonclick();
  };

  return (
    <button onClick={handleonclick} className="w-20 h-9 border-black border-2">
      {props.name}
    </button>
  );
};

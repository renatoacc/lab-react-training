export function Random(props) {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );
  return (
    <h3 className="random">
      Random value between {props.min} and {props.max} : {randomNumber};
    </h3>
  );
}

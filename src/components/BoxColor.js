export function BoxColor(props) {
  return (
    <div
      className="boxColor"
      style={{ background: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      <h3 style={{ color: 'white' }}>
        Color rgb: {props.r},{props.g},{props.b}
      </h3>
    </div>
  );
}

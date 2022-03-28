export default function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt={props.firstName} />
      <div className="IdCardInfo">
        <div>
          <h4>Frist name:</h4> <p>{props.firstName}</p>
        </div>
        <div>
          <h4>Last name:</h4> <p>{props.lastName}</p>
        </div>
        <div>
          <h4>Height:</h4> <p>{props.height}</p>
        </div>
        <div>
          <h4>Gender:</h4> <p>{props.gender}</p>
        </div>
        <div>
          <h4>Birth:</h4> <p>{props.birth.toLocaleDateString('en-US')}</p>
        </div>
      </div>
    </div>
  );
}

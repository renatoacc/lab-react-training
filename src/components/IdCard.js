export default function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt={props.firstName} />
      <div className="IdCardInfo">
        <div>
          <h4>Frist name:{props.firstName}</h4>
        </div>
        <div>
          <h4>Last name:{props.lastName}</h4>
        </div>
        <div>
          <h4>Height:{props.height}</h4>
        </div>
        <div>
          <h4>Gender:{props.gender}</h4>
        </div>
        <div>
          <h4>Birth:{props.birth.toLocaleDateString('en-US')}</h4>
        </div>
      </div>
    </div>
  );
}

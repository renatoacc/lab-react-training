export function CreditCard(props) {
  const numberHide = (elem) => {
    const hideCard = [];
    for (let i = 0; i < elem.length; i++) {
      if (i < elem.length - 4) {
        hideCard.push('.');
      } else {
        hideCard.push(elem[i]);
      }
    }
    return hideCard;
  };

  return (
    <div
      className="creditCard"
      style={{ background: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div>
        <img src="../assets/images/visa.png" alt={props.type} />
      </div>
      <div>
        <h3>{numberHide(props.number)}</h3>
      </div>
      <div>
        <h6>
          Expires {props.expirationMonth}/
          {props.expirationYear.toString().substr(2)}
        </h6>
        <h6>{props.bank}</h6>
      </div>
      <div>
        <h5>{props.owner}</h5>
      </div>
    </div>
  );
}

export function Greetings(props) {
  switch (props.lang) {
    case 'fr':
      return <h3 className="language">Bonjour {props.name}</h3>;
    case 'de':
      return <h3 className="language">Hallo {props.name}</h3>;
    case 'es':
      return <h3 className="language">Hola {props.name}</h3>;
    default:
      return <h3 className="language">Hello {props.name}</h3>;
  }
}

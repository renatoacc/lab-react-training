import './App.css';
import IdCard from './components/IdCard';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';

function App() {
  return (
    <>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang="pt" name="Renato" />
      <Random min={1} max={20} />
      <BoxColor r={255} g={30} b={53} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
    </>
  );
}

export default App;

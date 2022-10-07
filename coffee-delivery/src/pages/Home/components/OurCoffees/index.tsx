import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffee";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeeContainer } from "./styles";

export function OurCoffee() {
  return (
    <OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle">Nossos Cafés</TitleText>
      <CoffeeList>

        {
          coffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee}/>
          ))
        }


      </CoffeeList>
    </OurCoffeeContainer>
  )
}
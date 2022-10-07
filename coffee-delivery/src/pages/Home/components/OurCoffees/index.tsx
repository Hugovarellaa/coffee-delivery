import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeeContainer } from "./styles";

export function OurCoffee() {
  return (
    <OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle">Nossos Cafés</TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />

      </CoffeeList>
    </OurCoffeeContainer>
  )
}
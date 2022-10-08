import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCardWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const formattedPrice = formatMoney(coffee.price)

  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity(oldState => oldState + 1)
  }

  function handleDecrease() {
    setQuantity(oldState => oldState - 1)
  }

  function handleAddToCard() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd)
  }



  return (
    <CoffeeCardContainer>
      <img
        src={`/coffees/${coffee.photo}`}
        alt=""
      />
      <Tags>
        {
          coffee.tags.map(tag => (
            <span key={`${coffee.id} ${tag}`}>{tag}</span>
          ))
        }
      </Tags>
      <Name>
        {coffee.name}
      </Name>
      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as='strong'>
            {formattedPrice}
          </TitleText>
        </div>

        <AddCardWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCard}>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
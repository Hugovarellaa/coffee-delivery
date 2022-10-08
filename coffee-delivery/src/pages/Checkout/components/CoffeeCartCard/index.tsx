import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../context/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { chageCartItemQuantity } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)


  function handleIncrease() {
    chageCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    chageCartItemQuantity(coffee.id, 'decrease')
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src={`/coffees/${coffee.photo}`}
          alt={`/coffees/${coffee.name}`}
        />
        <div>
          <RegularText color="subtitle">
            {coffee.name}
          </RegularText>
          <ActionContainer>
            <QuantityInput size='small' quantity={coffee.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />

            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
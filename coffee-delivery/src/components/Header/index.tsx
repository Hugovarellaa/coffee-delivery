import { MapPin, ShoppingCart } from "phosphor-react"
import { CoffeeDeliveryLogo } from "../Logo"
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <CoffeeDeliveryLogo />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill' />
            Porto Alegre
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { CoffeeDeliveryLogo } from "../Logo"
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to='/'>
          <CoffeeDeliveryLogo />
        </NavLink>

        <HeaderButtonContainer>

          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill' />
            Porto Alegre
          </HeaderButton>
          <NavLink to='/checkout'>
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
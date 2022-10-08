import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function CheckoutPage (){
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
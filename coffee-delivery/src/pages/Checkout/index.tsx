import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./styles";

export function CheckoutPage (){
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
    </CheckoutContainer>
  )
}
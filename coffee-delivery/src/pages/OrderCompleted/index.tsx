import avatarImg from "../../assets/avatar.svg";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderCompletedContainer, OrderDetailsContainer } from "./styles";

export function OrderCompleted() {

  return (
    <OrderCompletedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>

      <section>
        <OrderDetailsContainer></OrderDetailsContainer>
        <img src={avatarImg} alt="" />
      </section>
    </OrderCompletedContainer>
  )
}
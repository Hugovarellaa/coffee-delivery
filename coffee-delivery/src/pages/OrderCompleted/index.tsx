import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import avatarImg from "../../assets/avatar.svg";
import { InforWithIcon } from "../../components/InforWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderCompletedContainer, OrderDetailsContainer } from "./styles";

export function OrderCompleted() {
  const { colors } = useTheme()
  return (
    <OrderCompletedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>

          <InforWithIcon
            icon={
              <MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em Farrapos <strong>Rua João Daniel Martinelli, 102 </strong>
                <br />
                Porto Alegre, RS
              </RegularText>
            }
            iconBg={colors["brand-purple"]}
          />

          <InforWithIcon
            icon={
              <Clock weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow"]}
          />

          <InforWithIcon
            icon={
              <CurrencyDollar weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow-dark"]}
          />

        </OrderDetailsContainer>
        <img src={avatarImg} alt="" />
      </section>
    </OrderCompletedContainer>
  )
}
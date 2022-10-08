import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import avatarImg from "../../assets/avatar.svg";
import { InforWithIcon } from "../../components/InforWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import { CheckoutData } from "../Checkout";
import { paymentMethod } from "../Checkout/components/CheckoutForm/PaymentMethodOptions";
import { OrderCompletedContainer, OrderDetailsContainer } from "./styles";

interface LocationType {
  state: CheckoutData
}

export function OrderCompleted() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if(!state){
    return <p></p>
  }

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
                Entrega em Farrapos <strong>{state.street}, {state.number} </strong>
                <br />
                {state.district} - {state.city} , {state.uf}
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
                <strong>{paymentMethod[state.paymentMethod].label}</strong>
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
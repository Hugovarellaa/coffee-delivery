import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import introImg from "../../../../assets/intro-img.png";
import { InforWithIcon } from "../../../../components/InforWithIcon";
import { RegularText } from "../../../../components/Typography";
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";

export function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl" >
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as='h3'>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InforWithIcon
              icon={<ShoppingCart weight="fill" />}
              text='Compra simples e segura'
              iconBg={colors["brand-yellow-dark"]}
            />
            
            <InforWithIcon
              icon={<Package weight="fill" />}
              text='Embalagem mantém o café intacto'
              iconBg={colors["base-text"]}
            />
           
            <InforWithIcon
              icon={<Timer weight="fill" />}
              text='Entrega rápida e rastreada'
              iconBg={colors["brand-yellow"]}
              
            />
           
            <InforWithIcon
              icon={<Coffee weight="fill" />}
              text='O café chega fresquinho até você'
              iconBg={colors["brand-purple"]}
              
            />
          </BenefitsContainer>
        </div>
        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
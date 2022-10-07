import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCardWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1665964800&Signature=Eu-RtupXCoVDj4jtAQUuU3d3QHm3oZlgEIZAj3SeOKdGYw2ZllBQjfV3S-7C9HBZkqqliW~qi1VJHIKINC8Hn1Ajpj76kYirHF60EiGpSUsbqLBkuwQIlWjIsy7AS9yxgThyh01ftrE10FBusbpiTpLvh13QWtZqisNZnDvOleonQjqhwB6~n8wQvADpp0v10a-ia8USNv-P2v8olm3BI-dWr97TrOkxFxZ2BwsMqUZhokCWgh1yahShZ9lgIb6FyEL8Iz-9nvRm05-zuAPAzey6yFHU8-3mSmdpbI8NjseUuhImf1pAVsKgHdaUH5B3kupWPUbCIfMlvRgODQSUtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
      <Name>
        Expresso Tradicional
      </Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as='strong'>9,90</TitleText>
        </div>
        
        <AddCardWrapper>
        <QuantityInput />
          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export const paymentMethod = {
  credit: {
    label: 'Cartão de credito',
    icon: <CreditCard size={16} />
  },
  debit: {
    label: 'Debito',
    icon: <Bank size={16} />
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />
  }
}

export function PaymentMethodOptions() {
  const { register, formState: { errors } } = useFormContext()
  const paymentMethodError = errors?.paymentMethod?.message as unknown as string
  return (
    <PaymentMethodOptionsContainer>
      {
        Object.entries(paymentMethod).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            id={key}
            icon={icon}
            label={label}
            value={key}
            key={label}
            {...register('paymentMethod')}
          />
        ))
      }
      {paymentMethod && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
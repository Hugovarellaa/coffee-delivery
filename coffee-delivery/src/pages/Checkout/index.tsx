import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { useCart } from "../../hooks/useCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

enum PaymentMethods {
  credit = "credit",
  debit = 'debit',
  money = 'money',
}

const confirmCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
})

export type CheckoutData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type ConfirmCheckoutFormData = CheckoutData


export function CheckoutPage() {
  const { clearCart } = useCart()

  const confirmCheckoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema)
  })

  const { handleSubmit } = confirmCheckoutForm

  const navigate = useNavigate()

  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    navigate('/success', {
      state: data
    })
    clearCart()
  }

  return (
    <FormProvider  {...confirmCheckoutForm}>
      <CheckoutContainer className="container" onSubmit={handleSubmit(handleConfirmCheckout)}>
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
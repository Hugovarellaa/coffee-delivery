import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";



const confirmCheckoutFormValidationSchema = zod.object({
  cep: zod.string()
})

export type CheckoutData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type ConfirmCheckoutFormData = CheckoutData


export function CheckoutPage() {
  const confirmCheckoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema)
  })

  const { handleSubmit } = confirmCheckoutForm

  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    console.log(data)
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
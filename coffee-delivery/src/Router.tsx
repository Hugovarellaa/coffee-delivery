import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { CheckoutPage } from "./pages/Checkout";
import { HomePage } from "./pages/Home";
import { OrderCompleted } from "./pages/OrderCompleted";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<OrderCompleted />} />
      </Route>
    </Routes>
  )
}
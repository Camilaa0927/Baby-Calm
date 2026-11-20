import type { Metadata } from "next";
import ProductPage from "../components/pages/ProductPage";

export const metadata: Metadata = {
  title: "Nuestro producto | BabyCalm",
  description: "Conoce la almohada sonora BabyCalm, sus características y el uso supervisado.",
};

export default function Page() {
  return <ProductPage />;
}

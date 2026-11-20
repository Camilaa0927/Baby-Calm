import type { Metadata } from "next";
import StorePage from "../components/pages/StorePage";

export const metadata: Metadata = {
  title: "Tienda BabyCalm",
  description: "Conoce la almohada sonora BabyCalm y añádela al carrito de demostración.",
};

export default function Page() {
  return <StorePage />;
}

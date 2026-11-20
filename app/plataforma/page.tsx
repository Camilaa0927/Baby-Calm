import type { Metadata } from "next";
import PlatformPage from "../components/pages/PlatformPage";

export const metadata: Metadata = {
  title: "Plataforma digital | BabyCalm",
  description: "Conoce el espacio digital BabyCalm para padres y cuidadores.",
};

export default function Page() {
  return <PlatformPage />;
}

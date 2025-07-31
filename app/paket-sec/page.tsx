import type { Metadata } from "next"
import PaketSecClientPage from "./PaketSecClientPage"

export const metadata: Metadata = {
  title: "Paket Seçimi - Hizmet Talebi | Oniva",
  description:
    "Seçtiğiniz hizmet paketi için detaylı bilgi formu. Uzman ekibimiz en kısa sürede sizinle iletişime geçecek.",
  robots: { index: false, follow: false },
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function PaketSecPage({ searchParams }: PageProps) {
  return <PaketSecClientPage searchParams={searchParams} />
}

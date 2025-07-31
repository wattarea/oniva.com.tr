import TesekkurlerClientPage from "./TesekkurlerClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teşekkürler - Talebiniz Alındı | Oniva",
  description: "Paket talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecek.",
  robots: { index: false, follow: false },
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function TesekkurlerPage({ searchParams }: PageProps) {
  return <TesekkurlerClientPage searchParams={searchParams} />
}

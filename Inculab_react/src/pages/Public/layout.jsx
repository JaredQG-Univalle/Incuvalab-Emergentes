import { Montserrat, Open_Sans } from "next/font/google"
import "./Public.css"

// Initialize the fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "IncuvaLab - Transformando Ideas en Realidad",
  description: "Incubadora de innovación y emprendimiento en Bolivia",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

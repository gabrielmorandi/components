import { Noto_Sans } from "next/font/google"
import "./globals.css"
import Provider from "./Provider"

const noto = Noto_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Frontend Components",
  description: "Frontend Components by Gabriel Morandi.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

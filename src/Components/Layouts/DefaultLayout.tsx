import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";


type Props = { children : ReactNode};

const DefaultLayout = ({ children }:Props) => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
        <Header></Header>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
    </div>
  )
}

export default DefaultLayout

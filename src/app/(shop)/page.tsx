import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Pink Moon Shop</h1>
      <h1 className={ `${titleFont.className} font-bold` }>Hola developers</h1>
    </main>
  );
}

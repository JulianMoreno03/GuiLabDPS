"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

const msj = "hola mundo";

export default function Home() {
const [numero1,setNumero] = useState();

  return (
    <main className={styles.main}>

    <h1>{msj}</h1>
         
    </main>
  );
}

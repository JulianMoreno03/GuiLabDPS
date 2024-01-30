"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [numero1, setNumero1] = useState('');

  const [numero2, setNumero2] = useState('');

  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma ${resultadoSuma}`);

  }

  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta : ${resultadoResta}`);
  }
  
  const multi = () => {
    const resultadoMulti = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicacion : ${resultadoMulti}`);

  }
  const division = () => {
    const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado de la division : ${resultadoDivision}`);

  }
  const potencia = () => {
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potencia : ${resultadoPotencia}`);

  }
  const raizCuadrada = () => {
    const resultadoRaiz = Math.sqrt(parseFloat(numero1))
    setResultado(`Resultado de la raiz : ${resultadoRaiz}`);

  }
 const limpiar =()=>{
    setNumero1('');
    setNumero2('');
    setResultado('');
 };
  
  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number"
            value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text} >Número 2:</label>
          <input className={styles.inputnum} type="number"
            value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button}
            onClick={sumar}>Sumar</button>
          <button className={styles.button}
            onClick={restar}>Restar</button>
              <button className={styles.button}
            onClick={multi}>Multiplicar</button>
            <button className={styles.button}
            onClick={division}>Dividir</button>
            
            <button className={styles.button}
            onClick={potencia}>Potencia</button>
            
            <button className={styles.button}
            onClick={raizCuadrada}>Raiz Cuadrada</button>
            <button className={styles.button}
            onClick={limpiar}>Limpiar</button>
        </div>
        {resultado && <div
          className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );

}

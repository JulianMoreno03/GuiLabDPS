
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>

      <h2 className={styles.title}>Equipos de Fútbol</h2>

      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>

          <ul>
            {equipo.plantilla.map((jugador) => (

              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m <br></br> Peso:
                  {jugador.Peso}Kg</p>
                <img src = {jugador.Img}></img>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};


export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74Kg","Img" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy934ntvtvVuYJLKZXlRQmIaysjhXNy03y7suc7Rz4Q&s"},
        { "id": 2, "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74Kg","Img":"https://s.hs-data.com/bilder/spieler/gross/600867.jpg" },
        { "id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81Kg","Img":"https://i.guim.co.uk/img/media/87d567aa2fb5072f8db4181ba46748275d6e161d/145_329_3124_1874/master/3124.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=28a0fc0a483ea13a3662d640f5e33e7f" }
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen ", "Altura": "1.75", "Peso": "74Kg","Img":"https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/12/05/barca.jpg?itok=mBgjR6bB"},
        { "id": 2, "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74Kg","Img":"https://images.daznservices.com/di/library/DAZN_News/4/48/inigo-martinez_18awjv5t4etuz18c610zurd15w.png?t=-251530487&w=800" },
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81Kg" ,"Img":"https://www.fcbarcelonanoticias.com/uploads/s1/13/16/72/4/gavi-en-un-partido-con-el-barc-a-copy.jpeg"}
      ]
    }
    // ... agregar otros equipos
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );

}

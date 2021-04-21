//spa
//ssr 
//ssg usaremos este modo pois nossa pagina nao se altera muitas vezes num dia(1 video por dia)
import { useEffect } from "react"
import {GetStaticProps} from "next"

type Episode = {
    id: string;
    title: string;
    members: string;
}
type HomeProps = {
  episodes: Array<Episode>;
}


export default function Home(props) {
  return (
    <div>
      
    </div>
  )
}

export  const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return{
    props: {
      episodes: data,
    },
    revalidate: 60 *60  *8 //8 horas(a cada 8 horas a pagina vai ser renderizada novamente, 
    //ou seja, na renderiza toda vez que uma nova pessoa entrar na pag)
  }
}
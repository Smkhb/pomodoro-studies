import Cronometro from "../components/Cronometro";
import Formulario from "../components/Fomulario";
import Lista from "../components/Lista";
import style from './App.module.scss'

export default function App() {
  return (
    <div className={style.AppStyle}>
        <Formulario />
        <Lista />    
        <Cronometro />
    </div>
  )
}

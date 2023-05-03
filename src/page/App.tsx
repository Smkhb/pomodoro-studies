import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Fomulario";
import Lista from "../components/Lista";
import style from './App.module.scss'
import IListaDeTarefas from "../types/IListaDeTarefas";

export default function App() {
  
  let [listaDeTarefas, setListaDeTarefas] = useState <IListaDeTarefas[]|[]> ([])
  const [selecionado, setSelecionado] = useState <IListaDeTarefas> ()
  
  function selecionaTarefa(tarefaSelecionada: IListaDeTarefas) {
    setSelecionado(tarefaSelecionada);
  }
  
  return (
    <div className={style.AppStyle}>
        <Formulario setListaDeTarefas={setListaDeTarefas} />
        <Lista listaDeTarefas={listaDeTarefas} selecionaTarefa={selecionaTarefa} />    
        <Cronometro />
    </div>
  )
}

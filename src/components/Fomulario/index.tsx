import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import IListaDeTarefas from "../../types/IListaDeTarefas";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setListaDeTarefas: React.Dispatch<React.SetStateAction<IListaDeTarefas[]>>
}

export default function Formulario({ setListaDeTarefas }: Props) {
    const [nome, setNome] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function addTarefa(e: React.FormEvent) {
        e.preventDefault();

        setListaDeTarefas(tarefasAntigas => [...tarefasAntigas, {
            nome,
            tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }]);
        setNome('')
        setTempo('00:00')
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step='1'
                    name="tempo"
                    id="tempo"
                    min='00:00:00'
                    max='01:30:00'
                    required
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                />
            </div>
            <Botao type='submit' >Adicionar</Botao>
        </form>
    )
}
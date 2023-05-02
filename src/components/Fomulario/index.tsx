import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import IListaDeTarefas from "../../types/IListaDeTarefas";

class Formulario extends React.Component<{
    setListaDeTarefas: React.Dispatch<React.SetStateAction<IListaDeTarefas[]>>
}> {
    state = {
        nome: '',
        tempo: '00:00'
    }

    addTarefa(e: React.FormEvent) {
        e.preventDefault();
        this.props.setListaDeTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}] )
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
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
                        value={this.state.nome}
                        onChange={e => this.setState({ ...this.state, nome: e.target.value })}
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
                        value={this.state.tempo}
                        onChange={e => this.setState({ ...this.state, tempo: e.target.value })}
                    />
                </div>
                <Botao type='submit' >Adicionar</Botao>
            </form>
        )
    }
}
export default Formulario
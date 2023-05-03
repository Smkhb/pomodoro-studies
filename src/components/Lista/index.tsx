import IListaDeTarefas from '../../types/IListaDeTarefas'
import Item from './Item'
import style from './Lista.module.scss'

interface Props {
  listaDeTarefas: IListaDeTarefas[],
  selecionaTarefa: (tarefaSelecionada: IListaDeTarefas) => void
}

export default function Lista({ listaDeTarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {listaDeTarefas.map(tarefa=> (
          <Item {...tarefa} key={tarefa.id} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  )
}


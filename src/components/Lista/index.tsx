import IListaDeTarefas from '../../types/IListaDeTarefas'
import Item from './Item'
import style from './Lista.module.scss'


export default function Lista({ listaDeTarefas }: {listaDeTarefas: IListaDeTarefas[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {listaDeTarefas.map((tarefa, index) => (
          <Item {...tarefa} key={index} />
        ))}
      </ul>
    </aside>
  )
}


import IListaDeTarefas from '../../../types/IListaDeTarefas'
import style from './Item.module.scss';

interface Props extends IListaDeTarefas {
  selecionaTarefa: (tarefaSelecionada: IListaDeTarefas) => void
}

export default function Item({ nome, tempo, selecionado, completado, id, selecionaTarefa }: Props) {

  return (
    <li
      className={`
      ${style.item} 
      ${selecionado ? style.itemSelecionado : ''} 
      ${completado ? style.itemCompletado : ''}
      `}
      onClick={() => !completado && selecionaTarefa({
        nome,
        tempo,
        selecionado,
        completado,
        id
      })}>
      <h3>{nome}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label='tarefa completada!'></span>}
    </li>
  )
}

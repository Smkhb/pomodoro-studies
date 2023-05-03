import IListaDeTarefas from '../../../types/IListaDeTarefas'
import style from '../Lista.module.scss'

interface Props extends IListaDeTarefas {
  selecionaTarefa: (tarefaSelecionada: IListaDeTarefas) => void
}

export default function Item({ nome, tempo, selecionado, completado, id, selecionaTarefa }: Props) {

  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
      nome,
      tempo,
      selecionado,
      completado,
      id
    })}>
      <h3>{nome}</h3>
      <span>{tempo}</span>
    </li>
  )
}

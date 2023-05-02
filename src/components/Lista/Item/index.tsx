import IListaDeTarefas from '../../../types/IListaDeTarefas'
import style from '../Lista.module.scss'
export default function Item({ nome, tempo, selecionado, completado, id }: IListaDeTarefas) {
  
  return (
    <li className={style.item}>
    <h3>{nome}</h3>
    <span>{tempo}</span>
  </li>
  )
}

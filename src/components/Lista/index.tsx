import { useState } from 'react'
import Item from './Item'
import style from './Lista.module.scss'

export default function Lista() {
  let [listaDeTarefas, setListaDeTarefas] = useState(
    [{
      nome: 'React.js',
      tempo: '01:00:00'
    }, {
      nome: 'MongoDB',
      tempo: '01:30:00'
    }, {
      nome: 'TypeScript',
      tempo: '00:30:00'
    }]
  )

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => setListaDeTarefas([...listaDeTarefas, { nome: 'Estudar estado', tempo: '01:00:00' }])} >Estudos do Dia</h2>
      <ul>
        {listaDeTarefas.map((tarefa, index) => (
          <Item {...tarefa} key={index} />
        ))}
      </ul>
    </aside>
  )
}



export default function Lista() {
  const listaDeTarefas = [{
    nome: 'React.js',
    tempo: '01:00:00'
  }, {
    nome: 'MongoDB',
    tempo: '01:30:00'
  }, {
    nome: 'TypeScript',
    tempo: '00:30:00'
  }]

  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {listaDeTarefas.map((tarefa,index) => (
          <li key={index}>
            <h3>{tarefa.nome}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}


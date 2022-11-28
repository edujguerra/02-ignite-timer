import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="gray">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

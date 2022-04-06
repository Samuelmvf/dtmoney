import { Container } from "./styles";

export function TransactionsTable () {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Almoço de final de semana</td>
            <td className="withdraw">- R$1000</td>
            <td>Alimentação</td>
            <td>04/06/2020</td>
          </tr>
          <tr>
            <td>Criação DTMONEY</td>
            <td className="deposit">R$5000</td>
            <td>Desenvolvimento</td>
            <td>04/06/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
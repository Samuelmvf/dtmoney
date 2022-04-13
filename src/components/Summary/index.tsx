import { Container } from "./styles";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import totalImage from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary () {
  const data = useContext(TransactionsContext);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="Saidas" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className="total-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>2022/04/13</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight variant="expense">- $ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>2022/04/18</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
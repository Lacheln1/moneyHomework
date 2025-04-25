import History from "./organism/History";
import Header from "./organism/Header";
import Transaction from "./organism/Transaction";
import Balance from "./organism/Balance";

function App() {
  return (
    <>
      <Header />
      <Balance />
      <Transaction />
      <History />
    </>
  );
}

export default App;

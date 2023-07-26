import "./App.css"
import Transaction from "./componets/Transaction"
import Form from "./componets/Form";
import { useState, useEffect } from "react";
import DataContext from './data/DataContext'
import Report from './componets/Report'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {

  const [data, setData] = useState([])
  const [reportInc, setReportInc] = useState(0)
  const [reportExp, setReportExp] = useState(0)


  const onAddNewItem = (newItem) => {
    setData((prevData) => {
      return [newItem, ...prevData]
    })
  }

  useEffect(() => {
    const amount = data.map(item => item.amount)
    const income = amount.filter(el => el > 0).reduce((a, b) => a + b, 0)
    const expense = amount.filter(el => el < 0).reduce((a, b) => a + b, 0) * -1
    setReportInc(income)
    setReportExp(expense)

  }, [data])

  return (
    <DataContext.Provider value={
      {
        income: reportInc,
        expense: reportExp,
        balance: reportInc - reportExp
      }
    }>
      <div className="container">
        <h1>Money Tracker</h1>
        <Router>
          <div>
            <ul className="menu">
              <li>
                <Link to="/">REPORT</Link>
              </li>
              <li>
                <Link to="/insert">FORM</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" exact
              element={<Report />}>
              </Route>
              <Route path="/insert"
                element={<>
                  <Form onAddItem={onAddNewItem} />
                  <Transaction data={data} /></>
                }>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;

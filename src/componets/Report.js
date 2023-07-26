import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./Report.css"

const Report = () => {
    const { income, expense, balance } = useContext(DataContext)
    const formatNum = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    return (
        <div>
            <div className="balance">
                <p>Balance : {formatNum(balance)}$</p>
            </div>
            <div className="total">
                <p>Total income: <br></br> <span>{formatNum(income)}$</span> </p>
                <p>Total expense: <br></br> <span>{formatNum(expense)}$</span></p>
            </div>
        </div>
    )
}

export default Report 
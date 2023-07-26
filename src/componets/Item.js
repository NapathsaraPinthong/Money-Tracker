import './Item.css'
import PropTypes from 'prop-types'

const Item = (props) => {
    const {title, amount, id} = props
    const status = amount>0 ? "income" : "expense"
    const sign = amount>0 ? "+" : "-"
    const formatNum = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className={status}>
            <li className="item">{title}
                <span>{sign}{formatNum(Math.abs(amount))}</span></li>
        </div>
    )
}

Item.prototype = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}



export default Item;
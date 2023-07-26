import Item from "./Item";

const Transaction = (props) => {
    const {data} = props
    return (
        <div>
            <ul>
                {data.map(item => {
                    return <Item {...item} key={item.id} />
                })}
            </ul>
        </div>
    )
}

export default Transaction
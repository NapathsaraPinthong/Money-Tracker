import "./Form.css"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value);
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(() => {
        if(amount !== 0 && title.trim().length > 0){
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    },[title,amount])



    return (
        <div className="form-div">
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Title</label>
                    <input type='text' placeholder="enter title"
                        onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>Amout</label>
                    <input type='number' placeholder="+income -expense" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
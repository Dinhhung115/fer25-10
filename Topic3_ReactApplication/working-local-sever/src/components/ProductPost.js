import axios from "axios";
import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap";

export default function ProductPost() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [catId, setCatId] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get("http://localhost:9999/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9999/products", {
            name: name,
            price: price,
            catId: catId
        }).then(res => {
            if (res.status == 201)
                setMessage("Created success")
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Create a new Product</h2>
            {
                message.length > 0 && <Alert variant="success">{message}</Alert>
            }
            <form onSubmit={e => handleSubmit(e)}>
                <label>Id</label>
                <input disabled /><br></br>
                <label>Name</label>
                <input onChange={e => setName(e.target.value)} /><br></br>
                <label>Price</label>
                <input onChange={e => setPrice(e.target.value)} /><br></br>
                <label>Category</label>
                <select onChange={e => setCatId(parseInt(e.target.value))}>
                    <option>-- Select category --</option>
                    {
                        categories.map(c => (
                            <option value={c.id} key={c.id}>{c.name}</option>
                        ))
                    }
                </select>
                <br></br>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}
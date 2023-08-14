import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])
    function handleSubmit(e) {
        e.preventDefault()
        setItems(currentItems => {
            return [...currentItems, {id: crypto.randomUUID(), title: newItem, completed: false},]
    })
        setNewItem("")
    }

  return (
     <>
   <form className="new-item-form" onSubmit={handleSubmit}>
     <div className={"from-row"}>
       <label htmlFor={"item"}>New Item</label>
         <input value={newItem} type="text" onChange={e => setNewItem(e.target.value)} name="name" id={"item"} />
     </div>
     <button className={"btn"}>Add Item</button>
   </form>
   <h1 className={"header"}>Todo List</h1>
   <ul className={"list"}>
       {items.map(item => {
           return <li key={item.id}>
               <lable>
                   <input type={"checkbox"} checked={item.completed} />
                     {item.title}
               </lable>
               <button className={"btn btn-danger"}>Delete</button>
           </li>
       })}

   </ul>
    </>
  );
}

export default App;

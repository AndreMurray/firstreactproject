import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [newItem, setNewItem] = useState("")
  return (
     <>
   <form className="new-item-form">
     <div className={"from-row"}>
       <label htmlFor={"item"}>New Item</label>
         <input type="text" name="name" id={"item"} />
     </div>
     <button className={"btn"}>Add Item</button>
   </form>
   <h1 className={"header"}>Todo List</h1>
   <ul className={"list"}>
     <li>
       <label>
            <input type="checkbox" />
           Item 1
       </label>
       <button className={"btn btn-danger"}>Delete</button>
     </li>
       <li>
           <label>
               <input type="checkbox" />
               Item 2
           </label>
           <button className={"btn btn-danger"}>Delete</button>
       </li>
   </ul>
    </>
  );
}

export default App;

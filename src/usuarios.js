import React, {useState, useEffect} from "react";
import axios from "axios";




export default function Users() {
     const [users, setUsers] = useState([]);
     const [id, setId] = useState("");
     const [nome, setNome] = useState("");
     const [email, setEmail] = useState("");
     const [password, setTipo] = useState("");



     const url = "https://web-development2.vercel.app/";

     useEffect(() => {
     fetch(url + "users")
     .then((response) => response.json())
     .then((data) => setUsers(data))
     .catch((err) => console.log(err));
     }, [url]);

}
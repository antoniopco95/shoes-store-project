import "./style.css";
import { useState, useEffect } from "react";

function Main() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 2000);
      return clearTimeout(timer);
    }
  }, [notification]);

  const handleChangeInput = (event) => {
    setNewUser(event.target.value);
  };

  const handleAddUser = () => {
    if (newUser) {
      setUsers([...users, newUser]);
      setNewUser("");
      setNotification("Usuário adicionado com sucesso!");
    }
  };
  return (
    <div className="container">
      <div className="left">
        <input type="text" placeholder="Nome" onChange={handleChangeInput} />
        <button onClick={handleAddUser}>Adicionar</button>
        {notification && <p>{notification}</p>}
      </div>
      <div className="right">
        <h1>Usuários</h1>
        <div className="names">
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;

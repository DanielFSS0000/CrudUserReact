import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FormUsers from "./components/FormUsers";
import UsersCard from "./components/UsersCard";

const baseURL = "https://users-crud1.herokuapp.com";

function App() {
  const [users, setUsers] = useState();

  //Estado para pasar info desde userCard hasta FormUser
  const [updateInfo, setUpdateInfo] = useState();

  const [formIsClose, setFormIsClose] = useState(true);

  //Funcion que sirve como get para los usuarios
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users);

  // Para crear un usuario nuevo
  const createNewUser = (data) => {
    const URL = `${baseURL}/users/`;
    axios
      .post(URL, data) // aca se establecen los parametro que recibe la URL
      .then((res) => {
        console.log(res.data); //aca solo se necesita un console.log
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Funcion para eliminar
  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .delete(URL) //DELETE SOLO RECIBE LA URL YA LA URL YA CONTIENE EL ID
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  //Actualizar un usuario especifico
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className="App">
      <div className="App__container-title">
        <h2 className="App__title " >Users Crud</h2>
        <div>
        <button onClick={handleOpenForm} className="App__btn fa-sharp fa-solid fa-user"> New User</button>
        </div>
        
      </div>
      {/* Se agrega corto Circuito JS para activar el efecto de close */}
      <div className={`form-container ${formIsClose && 'disable__form'}`}> 
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormIsClose={setFormIsClose}
      />
      </div>
      <div className="users-container">
        {users?.map((user) => (
        <UsersCard
          key={user.id}
          user={user} //Key sirve como identificador para el virtual dom puede encontrar mas rapido los elementos
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

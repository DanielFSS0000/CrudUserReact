import React from "react";
import './styles/userCard.css'

const UsersCard = ({ user, deleteUserById, setUpdateInfo,setFomrIsClose }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
    setFomrIsClose(false)
  };

  return (
    <article className="user">
      <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__span">Email</span>
          {user.email}
        </li>
        <li className="user__item">
          <span className="user__span">Birthday</span>
          <div className="user__item-container">
          <i className="user__git fa-solid fa-gift"></i>{user.birthday}
          </div>
        </li>
      </ul>
      <footer className="user__footer">
        <button className="user__btn" onClick={() => deleteUserById(user.id)}>
        <i          
          className="user__trash fa-solid fa-trash-can">  
        </i>
        </button>
        <button className="user__btn" onClick={handleEdit}>
        <i  className="user__edit fa-solid fa-pen-to-square"></i>
        </button>
      </footer>
    </article>
  );
};

export default UsersCard;

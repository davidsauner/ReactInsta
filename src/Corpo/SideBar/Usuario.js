import { useState } from "react";

export default function Usuario() {
  const [username, setUserName] = useState("Catana");
  const [imguser, setImgUser] = useState("assets/img/catanacomics.svg");
  function Mudaimgperfil() {
    const url = prompt("Nova Imagem de perfil");
    try {
      let urll = new URL(url);
    } catch (err) {
      alert("Coloque uma url valida");
      return;
    }
    setImgUser(url);
  }
  function Mudanomeperfil() {
    const novonomeperfil = prompt("Novo nome de exebição");
    setUserName(novonomeperfil);
  }
  console.log(username);
  return (
    <>
      <div data-test="user" class="usuario">
        <img
          data-test="profile-image"
          onClick={() => Mudaimgperfil()}
          src={imguser}
          alt={username}
        />
        <div class="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {username}
            <ion-icon
              data-test="edit-name"
              onClick={() => Mudanomeperfil()}
              name="pencil"
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}

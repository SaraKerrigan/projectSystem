import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AboutUs from "./components/aboutUs/AboutUs";
import Stage from "./components/stages/Stages";
import Answers from "./components/answers/Answers";
import Footer from "./components/footer/Footers";
import { useState } from "react";

function App() {
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const sendData = async () => {
    const data = {
      fio: fio,
      email: email,
      description: description,
    };

    if (!fio || !email) {
      alert("заполните обязательные поля");
      return;
    }
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
   await promise.then((response) => {
     return response;
    }).then((res)=>console.log(res))
  };

  return (
    <div className="main">
      <Header />
      <Main />
      <AboutUs />
      <Stage />
      <Answers />
      <Footer
        fio={fio}
        setFio={setFio}
        email={email}
        setEmail={setEmail}
        description={description}
        setDescription={setDescription}
        sendData={sendData}
      />
    </div>
  );
}

export default App;

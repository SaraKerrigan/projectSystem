import "./Main.css";


const Main = ()=> {
    return (
      <div className="main">
        <div className="main__container">
          <h1 className="main__container-title">
            Проектные решения любой сложности
          </h1>
          <p className="main__container-text">
            Есть над чем задуматься: базовые сценарии поведения пользователей
            и по сей день остаются уделом проектантов
          </p>
          <button className="main__container-btn">Заказать расчёт</button>
        </div>
      </div>
    );
}

export default Main;
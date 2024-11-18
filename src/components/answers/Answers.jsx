import "./Answers.css";

const Answers = () => {
  return (
    <div className="answers">
      <h2 className="answers__title">Вопросы</h2>
      <div className="answers__items">
        <div className="answer__item">
          <h3 className="answer__item-title">
            Из чего формируется конечная стоимость проекта?
          </h3>
          <p className="answer__item-text">
            Приятно, граждане, наблюдать, как некоторые особенности внутренней
            политики могут быть призваны к ответу.
          </p>
        </div>
        <div className="answer__item">
          <h3 className="answer__item-title">
            У меня есть свой проект. Можно ли его реализовать?
          </h3>
          <p className="answer__item-text">
            А ещё некоторые особенности внутренней политики, которые
            представляют собой яркий пример континентального типа.
          </p>
        </div>
        <div className="answer__item">
          <h3 className="answer__item-title">
            Я выбираю между разными компаниями. Почему вы?
          </h3>
          <p className="answer__item-text">
            Явные признаки победы институционализации набирают популярность
            среди определённых слоёв населения.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Answers;

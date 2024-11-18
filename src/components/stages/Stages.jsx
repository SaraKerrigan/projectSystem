import "./Stages.css";
import stageimg from "../../assets/images/stage-background.jpeg";

const Stage = () => {
  return (
    <div className="stage">
      <h2 className="stage__title">Этапы</h2>
      <div className="stage__items">
        <div className="stage__item">
          <h3 className="stage__item-title">Проводим консультацию</h3>
          <p className="stage__item-text">
            Влечёт за собой процесс внедрения и модернизации приоритизации
            разума над эмоциями. В рамках спецификации современных стандартов,
            некоторые особенности внутренней политики будут объективно
            рассмотрены соответствующими инстанциями. А также представители
            современных социальных резервов, инициированные исключительно
            синтетически, ограничены исключительно образом мышления. Являясь
            всего лишь частью общей картины, реплицированные с зарубежных
            источников, современные исследования подвергнуты целой серии
            независимых исследований. Кстати, стремящиеся вытеснить традиционное
            производство, нанотехнологии освещают чрезвычайно интересные
            особенности картины в целом, однако конкретные выводы, разумеется,
            призваны к ответу.
          </p>
          <div className="stage__item-links">
            <a className="stage__item-link" href="">
              Подробнее
            </a>
            <button className="stage__item-btn">Договор</button>
          </div>
        </div>
        <img src={stageimg} alt="" />
      </div>
    </div>
  );
};
export default Stage;

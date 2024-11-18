import firstimg from "../../assets/images/about-us-cub.png";
import secondimg from "../../assets/images/about-us-shesterenka.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about__us">
      <h2 className="about__us-title">О нас</h2>
      <p className="about__us-text">
        Также как перспективное планирование создаёт необходимость включения
        в производственный план целого ряда внеочередных мероприятий с учётом
        комплекса экспериментов, поражающих по своей масштабности
        и грандиозности. А также диаграммы связей могут быть описаны максимально
        подробно. Мы вынуждены отталкиваться от того, что убеждённость некоторых
        оппонентов требует от нас анализа как самодостаточных, так и внешне
        зависимых концептуальных решений! Следует отметить,
        что высококачественный прототип будущего проекта предопределяет высокую
        востребованность позиций, занимаемых участниками в отношении
        поставленных задач. Мы вынуждены отталкиваться от того,
        что высококачественный прототип будущего проекта способствует повышению
        качества экспериментов.
      </p>
      <div className="about__us-items">
        <div className="about__us-main-item">
          <div className="about__us-main-item-content">
            <p className="about__us-main-item-content-text">
              Принимая во внимание показатели успешности, перспективное
              планирование способствует подготовке и реализации новых принципов
            </p>
            <a className="about__us-main-item-content-link" href="">
              Подробнее
            </a>
          </div>
        </div>
        <div className="about__us-second-items">
          <div className="about__us-second-item">
            <img
              className="about__us-second-item-img"
              src={firstimg}
              alt="первая картинка"
            />
            <div className="about__us-second-item-block">
              <h3 className="about__us-second-item-block-title">
                Консультация с широким активом
              </h3>
              <p className="about__us-second-item-block-title-text">
                А также свежий взгляд на привычные вещи — безусловно открывает
                новые горизонты для как самодостаточных, так и внешне зависимых
                концептуальных решений
              </p>
            </div>
          </div>
          <div className="about__us-second-item">
            <img
              className="about__us-second-item-img"
              src={secondimg}
              alt="вторая картинка"
            />
            <div className="about__us-second-item-block">
              <h3 className="about__us-second-item-block-title">
                В своём стремлении повысить
              </h3>
              <p className="about__us-second-item-block-title-text">
                Качество жизни, они забывают, что сплочённость команды
                профессионалов представляет собой интересный эксперимент
                проверки прогресса профессионального сообщества
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import "./Footers.css";
import footerimg from "../../assets/images/footer-logo.png";
import ok from "../../assets/images/ok.svg";
import vk from "../../assets/images/vk.svg";

const Footer = (props) => {
  const {
    fio,
    email,
    description,
    setFio,
    setEmail,
    setDescription,
    sendData,
  } = props;

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <a className="footer__links-logo" href="">
            <img src={footerimg} alt="логотип" />
          </a>
          <a className="footer__link" href="">
            О нас
          </a>
          <a className="footer__link" href="">
            Проекты
          </a>
          <a className="footer__link" href="">
            Отзывы
          </a>
          <a className="footer__link" href="">
            Договор оферты
          </a>
          <a className="footer__link" href="">
            Договор подряда
          </a>
          <a className="footer__link" href="">
            Конфиденциальность
          </a>
          <a className="footer__link" href="">
            Партнёрское соглашение
          </a>
          <div className="footer__links-socials">
            <a className="footer__links-social" href="">
              <img src={ok} alt="" />
            </a>
            <a className="footer__links-social" href="">
              <img src={vk} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__form">
          <h2 className="footer__form-title">Оставить заявку</h2>
          <input
            value={fio}
            className="footer__form-name"
            type="text"
            placeholder="Фамилия, имя и отчество*"
            onChange={(event) => setFio(event.target.value)}
          />
          <input
            value={email}
            className="footer__form-name"
            type="text"
            placeholder="Email*"
            onChange={(event) => setEmail(event.target.value)}
          />
          <textarea
            value={description}
            className="footer__form-textarea"
            placeholder="Сообщение"
            id=""
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <button onClick={sendData} className="footer__form-btn">
            Отправить данные
          </button>
        </div>
        <div className="footer__text">
          Высокий уровень вовлечения представителей целевой аудитории является
          чётким доказательством простого факта: разбавленное изрядной долей
          эмпатии, рациональное мышление позволяет оценить значение модели
          развития. Таким образом, консультация с широким активом обеспечивает
          широкому кругу (специалистов) участие в формировании стандартных
          подходов.
        </div>
      </div>
    </div>
  );
};

export default Footer;

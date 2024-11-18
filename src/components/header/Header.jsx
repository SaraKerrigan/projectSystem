import logo from "../../assets/images/logo.png";
import search from "../../assets/images/lupa.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="headers">
      <div className="headers__top">
        <a className="headers__logo" href="">
          <img className="headers__logo-img" src={logo} alt="логотип" />
        </a>
        <ul className="headers__items">
          <li className="headers__item">
            <a className="headers__item-link" href="">
              О нас
            </a>
          </li>
          <li className="headers__item">
            <a className="headers__item-link" href="">
              Этапы
            </a>
          </li>
          <li className="headers__item">
            <a className="headers__item-link" href="">
              Вопросы
            </a>
          </li>
          <li className="headers__item">
            <a className="headers__item-link" href="">
              Оставить заявку
            </a>
          </li>
          <li className="headers__item">
            <a className="headers__item-link" href="">
              <img className="headers__item-search" src={search} alt="поиск" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

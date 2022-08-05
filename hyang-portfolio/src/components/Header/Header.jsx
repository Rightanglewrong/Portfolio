import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Header(props) {
  return (
    <div>
      <nav className={style.navbar}>
       <h1 className={style.title}>Creating Something from Nothing</h1>
        <div className={style.navitems}>
          <Link to="/moi"><span>Home</span></Link>
          <Link to="/projects"><span>Projects</span></Link>
          <Link to="/contact"><span>Contact</span></Link>
        </div>
      </nav>
    </div>
  );
}

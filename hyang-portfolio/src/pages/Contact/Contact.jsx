import Header from "../../components/Header/Header";
import style from "./Contact.module.css";

export default function Contact(props) {
  return (
    <main>
      <Header />
      <div className={style.content}>
        <h3>Contact me here</h3>
        <ul className={style.list}>
          <li>
            <a href="https://github.com/Rightanglewrong">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/benny-y-55506280/">Linkedin</a>
          </li>
          <li>Email: bennyyang996648@hotmail.com</li>
        </ul>
      </div>
    </main>
  );
}

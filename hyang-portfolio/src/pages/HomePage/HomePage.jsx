import Header from "../../components/Header/Header";
import style from "./HomePage.module.css";

export default function Homepage(props) {
  return (
    <main>
      <Header />
      <h3>Haolin Yang</h3>
      <p>
        I'm a full-stack software developer with previous experience in
        hospitality. Soon to graduate from General Assembly's Software
        Engineering Immersive program. Having built full-stack applications
        using MERN-stack (MongoDB, Express.js, React.js, and Node.js), Python
        Django, PostgreSQL, and other technologies. I am actively looking for
        opportunities in tech and hope to further my skills within the field
      </p>
    </main>
  );
}

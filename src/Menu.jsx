import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">login</Link>
      <Link to="/transacao">Transações</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Menu;
import { Link } from "react-router-dom";

type itemProps = {
  title: number;
  name: string;
};

function NavItem({ item }) {
  return (
    <>
      <li className="nav-item">
        {item.title === 1 ? (
          <Link to={"/"} className="nav-link">
            {item.name}
          </Link>
        ) : (
          <Link to={"/favorite"} className="nav-link">
            {item.name}
          </Link>
        )}
      </li>
    </>
  );
}
export default NavItem;

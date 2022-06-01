import { Outlet, NavLink } from 'react-router-dom';
import { Badge, Divider } from 'antd';
import { useSelector } from 'react-redux';
import '../Layout/Layout.css';
const Layout = () => {
  const myCatsLabel = useSelector(store => store.cats.cats);
  const countLike = myCatsLabel.filter(el => el.like !== false);
  console.log(countLike);
  return (
    <>
      <header className="header__panel">
        <div className="center">
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__link" to="/cats">
                Все котики
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to="/myCats">
                <div className="header__countLike">
                  {countLike.length > 0 ? (
                    <Badge
                      count={countLike.length}
                    ></Badge>
                  ) : null}
                </div>
                Любимые котики
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="center">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
          <Divider/>
        <div className="center">
          <span>Mi-mi cat 2022 </span>
        </div>
      </footer>
    </>
  );
};
export default Layout;

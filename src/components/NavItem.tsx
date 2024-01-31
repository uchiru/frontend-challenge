function NavItem({ item }: { item: string }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link">{item}</a>
      </li>
    </>
  );
}
export default NavItem;

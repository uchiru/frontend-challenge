import GalleryItem from "./NavItem";

function Header() {
  const titleButtons: string[] = ["Все котики", "Любимые котики"];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {titleButtons.map((item: string, index: number) => (
            <GalleryItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;


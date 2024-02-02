import GalleryItem from "./NavItem";

function Header() {
  type TitleButton = {
    title: number;
    name: string;
  };

  const titleButtons: TitleButton[] = [
    { title: 1, name: "Все котики" },
    { title: 2, name: "Любимые котики" },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {titleButtons.map((item: TitleButton, index: number) => (
            <GalleryItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

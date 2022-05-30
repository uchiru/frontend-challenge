import React from "react";
import cn from "classnames";
import {Link} from "react-router-dom";

interface  appProps {
  children: React.ReactElement | null;
}

function App({children}: appProps) {

  return (
      <>
        <header className={cn("bg-primary-600 text-sm py-6 px-16")}>
            <Link to="/" className={cn("px-6", "text-white")}>Все котики</Link>
            <Link to="/favorite" className={cn("px-7", "text-notwhite")}>Любимые котики</Link>
        </header>
        <div>{children}</div>
      </>
  )
}

export default App

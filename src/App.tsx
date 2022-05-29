import React from "react";

interface  appProps {
  children: React.ReactElement | null;
}

function App({children}: appProps) {

  return (
      <>
        <header>blyaaa</header>
        <div>{children}</div>
      </>
  )
}

export default App

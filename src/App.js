import React from "react";
import ResponsiveDrawer from "./components/ResponsiveDrawer/responsiveDrawer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>

      <ResponsiveDrawer />
    </div>
  );
}

export default App;

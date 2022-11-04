import logo from "./logo.svg";
import "./App.css";

import CacheBuster from "react-cache-buster";
import version from "../package.json";

function App() {
  return (
    <CacheBuster
      currentVersion={version.version}
      isEnabled={true} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      metaFileDirectory={"."} //If public assets are hosted somewhere other than root on your server.
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <h1>{version}</h1> */}
        </header>
      </div>
    </CacheBuster>
  );
}

export default App;

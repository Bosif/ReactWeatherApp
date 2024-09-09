import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <footer>
          This project was coded by Bo Rutjes and is{" "}
          <a
            href="https://github.com/Bosif/ReactWeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

import Header from "./components/Header";
import UpcomingEvents from "./components/UpcomingEvents";
import LaterEvents from "./components/LaterEvents";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <UpcomingEvents />
      <LaterEvents />
    </div>
  );
};
export default App;

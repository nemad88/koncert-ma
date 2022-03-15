import Header from "./components/Header";
import UpcomingEvents from "./components/UpcomingEvents";
import LaterEvents from "./components/LaterEvents";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

const client = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <div className="wrapper">
        <Header />
        <UpcomingEvents />
        <LaterEvents />
      </div>
    </QueryClientProvider>
  );
};
export default App;

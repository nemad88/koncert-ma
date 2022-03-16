import { useState } from "react";
import Header from "./components/Header";
import UpcomingEvents from "./components/UpcomingEvents";
import LaterEvents from "./components/LaterEvents";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

const client = new QueryClient();

const App = (): JSX.Element => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([
    "park",
    "akvarium",
  ]);

  return (
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools /> */}
      <div className="wrapper">
        <Header
          setSelectedPlaces={setSelectedPlaces}
          selectedPlaces={selectedPlaces}
        />
        <UpcomingEvents selectedPlaces={selectedPlaces} />
        <LaterEvents selectedPlaces={selectedPlaces} />
      </div>
    </QueryClientProvider>
  );
};
export default App;

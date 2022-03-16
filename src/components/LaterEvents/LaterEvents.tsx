import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { LaterEventsBox, Title, Events } from "./LaterEvents.style";
import Card from "../Card";
import { IEvent } from "../../interfaces/IEvent";
import { sortByDate } from "../../utils/utils";
import { useQueryEvent } from "../../hooks/useQueryEvent";

interface ILaterEvents {
  selectedPlaces: string[];
}

const LaterEvents = ({ selectedPlaces }: ILaterEvents) => {
  const [sortedEvents, setSortedEvents] = useState<IEvent[]>([]);

  const { data: budapestParkData, isLoading: budapestParkDataIsLoading } =
    useQueryEvent("budapestpark");

  const { data: akvariumKlubData, isLoading: akvariumKlubDataIsLoading } =
    useQueryEvent("akvariumklub");

  useEffect(() => {
    if (!akvariumKlubDataIsLoading && !budapestParkDataIsLoading) {
      let allEvents: IEvent[] = [];

      if (selectedPlaces.includes("park")) {
        allEvents = [...allEvents, ...budapestParkData];
      }

      if (selectedPlaces.includes("akvarium")) {
        allEvents = [...allEvents, ...akvariumKlubData];
      }

      // const allEvents = [...budapestParkData, ...akvariumKlubData];
      const sortedAllEvents = sortByDate(allEvents);
      setSortedEvents(sortedAllEvents.slice(4));
    }
  }, [
    akvariumKlubData,
    budapestParkData,
    akvariumKlubDataIsLoading,
    budapestParkDataIsLoading,
    selectedPlaces,
  ]);

  return (
    <LaterEventsBox>
      <Title>További események</Title>
      <Events>
        {sortedEvents.map((event) => {
          return (
            <Card
              variation="small"
              key={`${event.title}${event.year}${event.month}${event.day}`}
              event={event}
            />
          );
        })}
      </Events>
    </LaterEventsBox>
  );
};

export default LaterEvents;

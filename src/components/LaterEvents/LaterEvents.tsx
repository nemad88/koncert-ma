import { useEffect, useState } from "react";
import { LaterEventsBox, Title, Events } from "./LaterEvents.style";
import Card from "../Card";
import { getBudapestParkEvents, getAkvariumKlubEvents } from "../../api/api";
import { IEvent } from "../../interfaces/IEvent";
import { sortByDate } from "../../utils/utils";
import { useQueryEvent } from "../../hooks/useQueryEvent";

const LaterEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [sortedEvents, setSortedEvents] = useState<IEvent[]>([]);

  const { data: budapestParkData, isLoading: budapestParkDataIsLoading } =
    useQueryEvent("budapestpark");

  const { data: akvariumKlubData, isLoading: akvariumKlubDataIsLoading } =
    useQueryEvent("akvariumklub");

  useEffect(() => {
    if (!akvariumKlubDataIsLoading && !budapestParkDataIsLoading) {
      const allEvents = [...budapestParkData, ...akvariumKlubData];
      setSortedEvents(sortByDate(allEvents));
    }
  }, [
    akvariumKlubData,
    budapestParkData,
    akvariumKlubDataIsLoading,
    budapestParkDataIsLoading,
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

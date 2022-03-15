import { useEffect, useState } from "react";
import { LaterEventsBox, Title, Events } from "./LaterEvents.style";
import Card from "../Card";
import { getBudapestParkEvents, getAkvariumKlubEvents } from "../../api/api";
import { IEvent } from "../../interfaces/IEvent";
import { sortByDate } from "../../utils/utils";

const LaterEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [sortedEvents, setSortedEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    getBudapestParkEvents().then((data: IEvent[]) =>
      setEvents((events) => [...events, ...data])
    );
    getAkvariumKlubEvents().then((data: IEvent[]) =>
      setEvents((events) => [...events, ...data])
    );
  }, []);

  useEffect(() => {
    setSortedEvents(sortByDate(events));
  }, [events]);

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

import { useEffect, useState } from "react";
import { Wrapper, Title, UpcomingBox } from "./UpcomingEvents.style";
import { IEvent } from "../../interfaces/IEvent";
import Card from "../Card";
import { sortByDate } from "../../utils/utils";
import { useQueryEvent } from "../../hooks/useQueryEvent";

const UpcomingEvents = () => {
  const [sortedEvents, setSortedEvents] = useState<IEvent[]>([]);

  const { data: budapestParkData, isLoading: budapestParkDataIsLoading } =
    useQueryEvent("budapestpark");

  const { data: akvariumKlubData, isLoading: akvariumKlubDataIsLoading } =
    useQueryEvent("akvariumklub");

  useEffect(() => {
    if (!akvariumKlubDataIsLoading && !budapestParkDataIsLoading) {
      const allEvents = [...budapestParkData, ...akvariumKlubData];
      setSortedEvents(sortByDate(allEvents).slice(0, 4));
    }
  }, [
    akvariumKlubData,
    budapestParkData,
    akvariumKlubDataIsLoading,
    budapestParkDataIsLoading,
  ]);

  return (
    <Wrapper>
      <Title>Közelgő események</Title>
      <UpcomingBox>
        {sortedEvents.map((event) => {
          return (
            <Card
              variation="normal"
              key={`${event.title}${event.year}${event.month}${event.day}`}
              event={event}
            />
          );
        })}
      </UpcomingBox>
    </Wrapper>
  );
};

export default UpcomingEvents;

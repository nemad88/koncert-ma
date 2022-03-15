import { CardWrapper, CardDetails } from "./Card.style";
import { IEvent } from "../../interfaces/IEvent";

interface ICard {
  variation: "normal" | "small";
  event: IEvent;
}

const Card = ({ variation = "normal", event }: ICard) => {
  return (
    <CardWrapper variation={variation}>
      <CardDetails variation={variation}>
        <div>{event.title}</div>
        <div>
          {event.year}. {event.month}. {event.day}.
        </div>
        <div>{event.place}</div>
      </CardDetails>

      <img src={event.imageUrl} loading="lazy" />
    </CardWrapper>
  );
};

export default Card;

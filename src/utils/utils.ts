import { IEvent } from "../interfaces/IEvent";

export const sortByDate = (events: IEvent[]) => {
  return Object.entries(events)
    .sort(([, a], [, b]) => {
      return (
        new Date(a.year, a.month, a.day).getTime() -
        new Date(b.year, b.month, b.day).getTime()
      );
    })
    .map((e) => e[1]);
};

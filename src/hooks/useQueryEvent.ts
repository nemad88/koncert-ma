import { useQuery } from "react-query";
import { getEventList } from "../api/api";

export const useQueryEvent = (url: any) => {
  return useQuery(url, () => {
    return getEventList(url);
  });
};

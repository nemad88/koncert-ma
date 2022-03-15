import axios from "axios";

const baseUrl = `https://koncert-info-web.herokuapp.com/api/v1`;

export const getBudapestParkEvents = () => {
  return axios.get(`${baseUrl}/budapestpark`).then((response) => response.data);
};

export const getAkvariumKlubEvents = () => {
  return axios.get(`${baseUrl}/akvariumklub`).then((response) => response.data);
};

export const getEventList = (place: any) => {
  return axios.get(`${baseUrl}/${place}`).then((response) => response.data);
};

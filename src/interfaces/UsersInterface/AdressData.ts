import { GeoData } from "./GeoData";

export interface AdressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
}

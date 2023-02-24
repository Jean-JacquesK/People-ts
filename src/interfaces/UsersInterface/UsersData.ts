import { AdressData } from "./AdressData";
import { CompanyData } from "./CompanyData";

export interface UsersData {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: AdressData;
  phone: string;
  website: string;
  company: CompanyData;
}

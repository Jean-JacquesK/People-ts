export type PoepleProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: AdressProps;
  phone: string;
  website: string;
  company: CompanyProps;
};

export type AdressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
};

export type GeoProps = {
  lat: string;
  lng: string;
};

export type CompanyProps = {
  name: string;
  catchPhrase: string;
  bs: string;
};

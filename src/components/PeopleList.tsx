import { useEffect, useState } from "react";
import { UsersData } from "../interfaces/UsersInterface/UsersData";
import { UsersApi } from "../utils/UsersApi";
import { PeopleItem } from "./PeopleItem";

export const PeopleList = () => {
  const [peoples, setPeoples] = useState<UsersData[]>([]);

  const clearPeopleData = () => setPeoples([]);

  useEffect(() => {
    UsersApi().then((res) => {
      setPeoples(res);
    });
  });

  return (
    <section className='d-flex flex-wrap justify-content-center m-2'>
      {peoples.map((people) => (
        <PeopleItem key={people.id} {...people} />
      ))}
    </section>
  );
};

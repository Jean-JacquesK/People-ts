import { PoepleProps } from "../types/type";
export const PeopleItem = ({
  name,
  username,
  email,
  adress,
  phone,
  website,
  company,
}: PoepleProps) => {
  return (
    <article className='card m-2 p-2 d-flex '>
      <h1 className='card-title'>{name}</h1>
      <h2 className='card-subtitle'>{username}</h2>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'> {email} </li>
        <li className='list-group-item'> {phone} </li>
        <li className='list-group-item'> {website} </li>
        <li className='list-group-item'> {adress} </li>
      </ul>
    </article>
  );
};

import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';
import './style.scss';
import { useFetch } from './useFetch';
import { FetchData } from './fetchData';

export const App = () => {
  const { data, showData } = useFetch();

  const users = () => {
    return (
      <>
        <ul>
          <li>Sai Baba </li>
          <li>Sai Baba </li>
          <li>Sai Baba </li>
          <li>Sai Baba </li>
          <li>Sai Baba </li>
          <li>Sai Baba </li>
        </ul>
      </>
    );
  };

  return (
    <div class="p-2">
      <h1>React JSX Starter</h1>
      <div>{showData()}</div>
      <div>{FetchData()}</div>
      <div>{users()}</div>
      <ButtonCounter name="Some Title" />
    </div>
  );
};

import React, { useState, useEffect } from 'react';

export const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const showData = () => {
    console.log('showData');
    return (
      <>
        <ul>
          {data &&
            data.map((item) => {
              return <li>{item.title} </li>;
            })}
        </ul>
      </>
    );
  };

  return { data, showData };
};

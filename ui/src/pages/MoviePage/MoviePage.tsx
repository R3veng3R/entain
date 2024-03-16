import { useEffect, useState } from 'react';
import { getData } from '../../services/movie.service';

export const MoviePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getTestData();
  }, []);

  const getTestData = async () => {
    try {
      const data = await getData();
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {` This is your data: ${data}`}
    </div>
  );
};

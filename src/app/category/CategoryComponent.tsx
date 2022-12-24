import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './category.module.scss';
import { Category } from '../types';

export default function CategoryComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          '/api/v1/categories?page=0&size=20'
        );
        console.log(`------> ${JSON.stringify(response)}`);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>Hello How Are You</div>{' '}
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <h2>Doing stuff with data</h2>
            {data.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

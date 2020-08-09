/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Category from '../Category';
import { List, Item } from './styles';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server-elvis.elvisss.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((cat) => (
          <Item key={cat.id}>
            <Category {...cat} path={`/pet/${cat.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

const ListOfCategories = React.memo(ListOfCategoriesComponent);

export default ListOfCategories;

import { Empty } from "antd";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import ProductCard from "../ProductCard/ProductCard";

const Action = () => {
  const { getMovie, movies } = useContext(contextsMovie);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    setSearchParams({
      type: "action",
    });
  }, []);
  useEffect(() => {
    getMovie();
  }, [searchParams]);
  console.log(movies);
  return (
    <div
      className="products-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
        margin: "40px auto",
      }}
    >
      {movies.length > 0 ? (
        movies.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Action;

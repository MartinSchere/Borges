import React, { Component } from "react";
import ProductCard from "./productCard";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const QUERY_PRODUCTS = gql`
  query {
    products {
      id
      title
      category {
        title
      }
    }
  }
`;

export function ProductList() {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
  if (loading)
    return (
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    );
  if (error)
    return (
      <div className="container py-24 mx-auto">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
          role="alert"
        >
          <span className="block sm:inline">
            Hubo un error al cargar los productos
          </span>
        </div>
      </div>
    );
  return (
    <React.Fragment>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.products.map(({ id, title, category }) => (
              <ProductCard key={id} title={title} category={category.title} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

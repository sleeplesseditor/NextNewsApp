import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import ItemCard from '../components/ItemCard';
import fetch from "isomorphic-fetch";

export default function Home({ news }) {
  return (
    <Layout>
            <div className="news-container">
                {/* {searchForm()} */}
                {news.map((n, i) => (
                    <ItemCard key={i} title={n.title} url={n.url} author={n.author} comments={n.num_comments} points={n.points} createdAt={n.created_at} />
                ))}
            </div>
        </Layout>
  )
}

Home.getInitialProps = async ({ query }) => {
  let news;
  try {
      const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${query.searchTerm ||
              "react"}`
      );
      news = await res.json();
      console.log('NEWS', news);
  } catch (err) {
      console.log("ERROR", err);
      news = [];
  }
  return {
      news: news.hits
  };
};

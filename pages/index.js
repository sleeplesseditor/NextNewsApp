import { useState } from "react";
import { useRouter, withRouter } from "next/router";
import Layout from "../components/Layout";
import ItemCard from '../components/ItemCard';
import fetch from "isomorphic-fetch";

const Home = ({ news }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleParam = setValue => e => setValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    router.push(`/news/?searchTerm=${searchQuery}`);
  };

  const searchForm = () => (
    <form className="search-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleParam(setSearchQuery)} 
          placeholder="Search for Topics..." 
          aria-label="Search"
        />
        <button className="search-form-button" type="submit">Search</button>
    </form>
);

  return (
    <Layout>
      <div className="news-container">
        {searchForm()}
        {news.map((n, i) => (
            <ItemCard 
              index={i} 
              title={n.title} 
              url={n.url} 
              author={n.author} 
              comments={n.num_comments} 
              points={n.points} 
              createdAt={n.created_at} 
            />
        ))}
      </div>
    </Layout>
  )
}

Home.getInitialProps = async ({ query }) => {
  console.log('QUERY', query)
  let news;
  try {
      const res = await fetch(
          `http://hn.algolia.com/api/v1/search?query=${query.searchTerm || 'react'}`
      );
      news = await res.json();
  } catch (err) {
      console.log("ERROR", err);
      news = [];
  }
  return {
      news: news.hits
  };
};

export default withRouter(Home);
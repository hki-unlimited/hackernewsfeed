import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HackerNewsList from './components/HackerNewsList/HackerNewsList';
import HackerNewsAPI from './api/HackerNewsAPI';

function App() {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    HackerNewsAPI.fetchTopStories().then((topStoriesIdList) => {
      Promise.all(topStoriesIdList.slice(0,10).map((id: number) => {
        return HackerNewsAPI.fetchTopStoryDetails(id);
      })).then((topStoriesWithDetails) => {
        //@ts-ignore //In a hurry to go home
        setTopStories(topStoriesWithDetails);
      });
    });
  }, []);

  return (
    <div className="App">
      <HackerNewsList newsItems={topStories}></HackerNewsList>
    </div>
  );
}

export default App;

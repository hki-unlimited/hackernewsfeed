import React, { useState, useEffect } from 'react';
import './App.css';
import HackerNewsList from './components/HackerNewsList/HackerNewsList';
import HackerNewsAPI from './api/HackerNewsAPI';
import HackerNewsItem from './models/HackerNewsItem';

function App() {
  const [topStories, setTopStories] = useState<HackerNewsItem[]>([]);

  useEffect(() => {
    //fetch top stories
    HackerNewsAPI.fetchTopStories().then((topStoriesIdList: number[]) => {
      //get the first ten stories, then get the details for each story.
      Promise.all(topStoriesIdList.slice(0,10).map((id: number) => {
        return HackerNewsAPI.fetchTopStoryDetails(id); //fetch the details: title, url etc
      })).then((topStoriesWithDetails: HackerNewsItem[]) => {
        setTopStories(topStoriesWithDetails); //set a state variable which will be passed to the child component
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

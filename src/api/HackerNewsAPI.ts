import HackerNewsItem from '../models/HackerNewsItem';

class BasePriceAPI {
    fetchTopStories = async () => {
        const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
        return response.json();
    }
    fetchTopStoryDetails = async (id: number): Promise<HackerNewsItem> => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return response.json();
    }
}

export default new BasePriceAPI();

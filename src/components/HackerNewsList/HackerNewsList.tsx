import React from "react";
import "./HackerNewsList.scss";
import HackerNewsItem from "../../models/HackerNewsItem";
import { observer } from "mobx-react-lite";

interface IRulesProps {
    newsItems: HackerNewsItem[];
}

function HackerNewsList(props: IRulesProps) {
    const { newsItems } = props;
    if (!newsItems) return null;
    return(
        <div className="news-list-container">
            <ul>
            {newsItems.map((entry: HackerNewsItem, index: number) => {
                return (
                 <li key={index}><a href={entry.url} target="_blank">{entry.title}</a></li>
                );
            })}
            </ul>
        </div>
    );
}

export default observer(HackerNewsList);

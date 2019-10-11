import React from "react";
import "./HackerNewsList.scss";
import { observer } from "mobx-react-lite";

interface IRulesProps {
    newsItems: any[];
}

function HackerNewsList(props: IRulesProps) {
    const { newsItems } = props;
    if (!newsItems) return null;
    return(
        <div className="news-list-container">
            <ul>
            {newsItems.map((entry: any, index: number) => { 
                return (
                 <li key={index}><a href={entry.url} target="_blank">{entry.title}</a></li>   
                );
            })}
            </ul>
        </div>
    );
}

export default observer(HackerNewsList);
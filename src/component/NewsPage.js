import React, { useEffect, useState } from "react";
import Header from "./Header"
import New from "./printilan/berita/New";
import classes from "./css/experience.css";
import Loading from "./printilan/berita/Loading";

function News() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(
                "https://newsapi.org/v2/everything?q=tesla&from=2021-08-19&sortBy=publishedAt&apiKey=54554e65aa2c42d694bee8c4683fcc95"
            )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setNews(data.articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return ( 
        <>
        <Header/>
        <h3 className = { classes.title }> News today </h3>
        <div className = { classes.container } > {
            error && < p className = { classes.error } > { error } < /p>} {
                isLoading && [1, 1, 1, 1].map((el, idx) => {
                    return <Loading key = { idx }/>;
                })
            } {
                !error && !isLoading && ( <
                    ul > {
                        news.map((e, idx) => {
                            return ( <
                                New key = { idx }
                                title = { e.title }
                                author = { e.author }
                                image = { e.urlToImage }
                                loading = { isLoading }
                                />
                            );
                        })
                    } </ul>
                )
            } 
                </div> 
</>
        );
    }

    export default News;

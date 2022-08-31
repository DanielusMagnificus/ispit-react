import React, { useState } from 'react'
import GithubInfo from './components/Information';
import RepositoriesList from './components/RepositoriesList';

const GithubForm = () => {

    const [term, setTerm] = useState("mike6715b");
    const [results, setResults] = useState("");
    const [repos, setRepos] = useState([]);

    const search = () => {

        let repoEndpoint = ` https://api.github.com/users/${term}`;
        fetchGitHubData(repoEndpoint, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        });

    }

    function fetchGitHubData(url) {
        fetch(url)
            .then((response) => response.json())
            .then(function (data) {
                console.log(data);
                setResults(data);
                fetchRepos(data.repos_url);
            });
    }

    function fetchRepos(repos_url) {
        console.log(repos_url);
        fetch(repos_url)
            .then((response) => response.json())
            .then(function (data) {
                console.log(data);
                setRepos(data);
            });
    }

    return (
        <div>
            <div className='ui card' style={{ padding: "20px" }}>
                <div className='content' >
                    <label>Github username: </label>
                    <input
                        type="text"
                        className='field'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        style={{ width: "100%" }} />
                    <div>
                        <button
                            className='ui button'
                            onClick={search}
                            style={{ width: "100%", marginTop: "10px" }}
                        >GO!</button>
                    </div>
                </div>
            </div>

            <GithubInfo avatar_url={results.avatar_url} name={results.name} location={results.location} bio={results.bio} />

            <RepositoriesList repos={repos} />

        </div>
    )
}

export default GithubForm
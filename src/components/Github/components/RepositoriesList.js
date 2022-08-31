import React, { Component } from 'react'

export default class RepositoriesList extends Component {

    render() {

        const renderedRepos = this.props.repos.map((repo) => {
            return (
                <div className='item' key={repo.id}>
                    <div className='content'>
                        {repo.name}
                    </div>

                </div>
            );

        });

        return (
            <div className='content'>
                <div className='ui card'>
                    {renderedRepos}
                </div>
            </div>
        )
    }
}

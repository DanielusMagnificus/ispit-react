import React, { Component } from 'react'

export default class GithubInfo extends Component {

    render() {

        const { avatar_url, name, location, bio } = this.props;

        return (
            <div>
                <div className='content'>
                    <div>AvatarURL: <a href={avatar_url}>{avatar_url}</a></div>
                    <div>Name: {name}</div>
                    <div>Location: {location}</div>
                    <div>Bio: {bio}</div>
                </div>
            </div>
        )
    }
}

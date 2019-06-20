import React, {Component} from 'react';

class Posts extends  Component{
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <>
                <h1>Posts</h1>
                {postItems}
            </>
        )
    }
}

export default Posts;
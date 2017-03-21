import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
    render() {

        if (!this.props.post) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <Link to="/">Back to index</Link>
                <h3>{this.props.post.title} </h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);

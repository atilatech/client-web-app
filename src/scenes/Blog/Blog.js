import React from 'react';
class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            model: null
        }
    }

    render () {

        return (
            <div>
                <h1>
                    Blog
                </h1>
                <hr />
            </div>
    );
    }
}

export default Blog;

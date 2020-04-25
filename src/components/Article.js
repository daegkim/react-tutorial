import React from 'react';

class Article extends React.Component {
    render() {
        if (this.props.mode === 'CREATE') {
            return (
                <article className="App-article">
                    <label>Title</label>
                    <textarea style={{ width: 300 }}></textarea>
                    <br />
                    <label>Desc</label>
                    <textarea style={{ width: 300 }}></textarea>
                </article>
            )
        }
        else if (this.props.mode === 'READ') {
            return (
                <article className="App-article">
                    <p className='title'>{this.props.title}</p>
                    <p>{this.props.desc}</p>
                </article>
            )
        }
        else if (this.props.mode === 'UPDATE') {
            return (
                <article className="App-article">
                    <label>Title</label>
                    <textarea style={{ width: 300 }}>{this.props.title}</textarea>
                    <br />
                    <label>Desc</label>
                    <textarea style={{ width: 300 }}>{this.props.desc}</textarea>
                </article>
            )
        }
        else {
            return (
                <article className="App-article">
                </article>
            )
        }
    };
}

export default Article
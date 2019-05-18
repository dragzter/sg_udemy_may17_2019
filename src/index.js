import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    faker.locale = "de";
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar" >
                    <img alt="avatar" src={ faker.image.avatar() }></img>
                </a>
                <div className="content">
                    <a href="/" className="author">{ faker.name.firstName() }</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">{ faker.lorem.sentence() }</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar" >
                    <img alt="avatar" src={ faker.image.avatar() }></img>
                </a>
                <div className="content">
                    <a href="/" className="author">{ faker.name.firstName() }</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">{ faker.lorem.sentence() }</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar" >
                    <img alt="avatar" src={ faker.image.avatar() }></img>
                </a>
                <div className="content">
                    <a href="/" className="author">{ faker.name.firstName() }</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">{ faker.lorem.sentence() }</div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
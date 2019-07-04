import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    faker.locale = "en_US";

 

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail 
                    author={ faker.name.firstName() } 
                    timeAgo="Today at 4:23pm" 
                    content="This is super nice" 
                    avatar={ faker.image.avatar() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={ faker.name.firstName() }
                    timeAgo="Today at  5:54pm" 
                    content="This is super cool" 
                    avatar={ faker.image.avatar() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={ faker.name.firstName() }
                    timeAgo="Today at 7:12am" 
                    content="This is super awesome" 
                    avatar={ faker.image.avatar() }
                />
            </ApprovalCard>

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
// Import the React and the ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Create a React component
//obs: Double quotes for JSX properties and single everywhere else 
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Pathfinder"/>
      <CommentDetail author="Banglalore"/>
      <CommentDetail author="Wraith"/>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

var React = require('react');


export default React.createClass({
  displayName: "DisplayComponent",

  getInitialState: () => {
    return {
      hi: 'derp'
    }
  },

  render: () => {
    return (
      <div id="display-component">
        <h2>here</h2>
        <h1>{ this.state.hi }</h1>
      </div>
    );
  }

});

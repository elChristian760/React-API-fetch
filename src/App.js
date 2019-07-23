import React from 'react';

//const API = 'https://api.github.com/users/elChristian760';

class App extends React.Component{
  
  state ={
    loading: true,
    person: null,
  };

  async componentDidMount(){
    const url = "https://randomuser.me/api";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: false })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div> 
        ) : (
            <div>
              <div>{this.state.person.name.title}</div>
              <div>{this.state.person.name.first}</div>
              <div>{this.state.person.name.last}</div>
              <div>{this.state.person.gender}</div>
              <div>{this.state.person.location.city}</div>
              <img src={this.state.person.picture.large} alt={this.state.person.name.title} />
            </div>
        )}
      </div>
    )
  }
}

export default App;
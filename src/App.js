import { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  
  state = {
    characterList: [],
    url: "https://rickandmortyapi.com/api/character/?page=1",
    nextUrl: '',
    prevUrl: '',
    page: 1
  }

  getCharacters = () => {
    const { url } = this.state;
    fetch(url)
      .then((response) => response.json())
      .then((response) => 
        this.setState({ characterList: response.results, 
          nextUrl: response.info.next, 
          prevUrl: response.info.prev }))
      .catch((error) => console.log("Error: ", error));
  }

  handlePrevUrl = () => {
    const { prevUrl, page } = this.state;
    this.setState({ url: prevUrl, page: page - 1});
  }

  handleNextUrl = () => {
    const { nextUrl, page } = this.state;
    this.setState({ url: nextUrl, page: page + 1});
  }

  componentDidMount = () => {
    this.getCharacters();
  }

  componentDidUpdate = (_, prevState) => {
    const { url } = this.state;
    if (url !== prevState.url) {
      this.getCharacters();
    }
  }


  render() {
    const { characterList, page } = this.state;
      return (
        <div className="App">
        <header className="App-header">
          <h3>Rick and Morty Characters</h3>
        </header>
        <main className="main">
          { characterList && <CharacterList list={characterList} />}
        </main>
        <footer className='footer'>
          <button className='prev' onClick={this.handlePrevUrl} disabled={!this.state.prevUrl}>Prev</button>
          <h3 className='page'>{page}</h3>
          <button className='next' onClick={this.handleNextUrl} disabled={!this.state.nextUrl}>Next</button>
        </footer>
      </div>
    );
  }
}

export default App;
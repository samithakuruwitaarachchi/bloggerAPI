import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost';
import HeaderText from './components/HeaderText';

function App() {
  return (
      <div className='container'>
        <HeaderText titleText='Create new post' />
        <CreatePost />
      </div>
  );
}

export default App;

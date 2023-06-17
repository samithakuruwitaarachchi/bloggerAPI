import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost';
import HeaderText from './components/HeaderText';
import SubHeaderText from './components/SubHeaderText';
import PostsList from './components/PostsList';

function App() {
  return (
      <div className='container'>
        <HeaderText titleText='Recent Posts' />
        <PostsList />
        <hr />
        <SubHeaderText titleText='Create new post' />
        <CreatePost />
      </div>
  );
}

export default App;

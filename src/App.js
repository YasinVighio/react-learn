import './App.css';
import MyName from './MyComponent';
import Learn from './Learn';

function App() {
  return (
    <div className='mainDiv'>
        <div className='childDiv'>
          Hello From <MyName name = "Yasin"/>
        </div>
        <Learn/>
    </div>
  );
}

export default App;

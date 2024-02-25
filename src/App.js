import LearningBoard from './LearningBoardComponents/LearningBoard';
import './App.css';

function App() {
  return (
    <div className="mainDiv">
      <div className='learningBoardContainer'>
      <h1 className='heading'>What we have learnt today?</h1>
        <LearningBoard/>
      </div>
    </div>
  );
}

export default App;

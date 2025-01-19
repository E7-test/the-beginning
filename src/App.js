import Question from './components/Question.js';
import Yes from './components/Yes.js';
import Yess from './components/Yess.js';
import No from './components/No.js';


function App() {
  return <>  
 <style>{'body { background-color: teal; }'}</style>
  <div className='main'>  
    <Question />
  </div>
  
  
  <div className='answers'>
      <Yes />
      <Yess />
      <No />
  </div>
</>
}

export default App;

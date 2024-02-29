import './app.css';
import { TextInput } from './commentInput';

function App() {

  const comments = [];
  return(
    <div style={{width: 500}}>
      <TextInput comments={comments} depth={0}/>
    </div>
  );
}

export default App;
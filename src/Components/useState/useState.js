import '../Styles/styles.css'
import Class1 from './Class1';
import Hook1 from './Hook1';
import Hook2 from './Hook2';
import Hook3 from './Hook3';
function useState() {
  return (
    <div className="App">
      <div className='box'>
        <h1>a simple counter with a class component</h1>
       <Class1/>
      </div>
      <div className='box'>
        <h1>a simple counter with a class Hook Component</h1>
       <Hook1/>
      </div>
      <div className='box'>
        <h1>Dealing with Objects with Hooks </h1>
       <Hook2/>
      </div>
      <div className='box'>
        <h1>Dealing with Objects with Hooks </h1>
       <Hook3/>
      </div>

    </div>
  );
}

export default useState ;

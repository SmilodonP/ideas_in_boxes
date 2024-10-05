import { useState } from 'react';
import Ideas from './Ideas';
import './App.css';
import Form from './Form';

function App(){
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Tattoo his face while he is sleeping.' },
    { id: 2, title: 'Make a super-secret password app for the boiz', description: 'So you, Travis, and your boiz can all know that none of you is a girl or a dirty liar.' },
    { id: 3, title: 'Learn to martial art on a sucker', description: 'To defend yourself from face tattoo Travis.' },
  ]
  const [ideas, setIdeas] = useState(dummyIdeas)
  
  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>Boxes of Ideas</h1>
      <p>...it's just a bunch of boxes... boxes of ideas...</p>
      <p>idea boxes... IdeaBoxes</p>
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Eat my shorts.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Rizzact
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

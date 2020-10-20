import React from 'react';

// クラスコンポーネント
// class App extends Component{
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello World!!"
//     );
//   }
// }

// functionalコンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

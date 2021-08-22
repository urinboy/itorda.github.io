import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myfirstelement = (
// <div>
//   <h1>ITO'RDAga Hush kelibsiz!</h1>
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
//   </div>
// );
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
   this.setState({username: event.target.value});
 }
 render() {
   return (
     <form>
     <h1>Hello {this.state.username}</h1>
     <p>Enter your name:</p>
     <input
       type='text'
       onChange={this.myChangeHandler}
     />
     </form>
   );
 }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// R  eactDOM.render(myfirstelement, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

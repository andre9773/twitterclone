import React, {Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


//class WhoAmI extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            years: 26
//        }
       
//    }

//    nextYear = () => {

//        this.setState(state => ({
//            years: ++state.years
//        }))
//    }
//    render() {
//        const { name, surname, link } = this.props;
//        const { years } = this.state;
//        return(
//            <>
//                <button onClick={this.nextYear }>++</button>
//                <h1>My name is {name}, surname - {surname}, years - {years }</h1>
//                <a href={link}>My profile</a>
//            </>
//        )
//    }
//}
//<WhoAmI name="John" surname="Smith" link="facebook.com" />



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
        <App />


    
        
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import {render} from 'react-dom';
import Cart from './components/cart.jsx'
class App extends React.Component {
  render () {
    let items=[{name:'Dress',index:'1'},{name:'Shoes',index:'2'},{name:'Belts',index:'3'},{name:'sun glass',index:'4'},{name:'wallet',index:'5'}]
    return <div><Cart items={items}/><p> Hello React!</p></div>;
  }
}

render(<App/>, document.getElementById('app'));
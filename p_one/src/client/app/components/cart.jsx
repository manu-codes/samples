import React from 'react'
class Cart extends React.Component{
    render(){
        console.log('props');
        console.log(this.props.items);
        return <ul>{this.props.items.map((item,index)=>
            <li key={index}>{item.name}</li>
        
            )}</ul>
    }
}
Cart.defaultProps={
    items:[]
}
Cart.propTypes={
    items:React.PropTypes.array
}
export default Cart;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getProducts } from './../redux/actions/ProductAction';

class Example extends Component {
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        const {products} = this.props.products;
        console.log(products);
        return (
            <div>
                example
                {/* {products.map((product,i) => {
                    <li key={i}>Test</li>
                })} */}
            </div>
        )
    }
};

Example.propTypes = {
    
    getProducts : PropTypes.func.isRequired,

    products : PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    products:state.products
});
export default connect(mapStateToProps,{getProducts})(Example);

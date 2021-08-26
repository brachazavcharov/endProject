import React, { useEffect } from 'react'
import { getAllProducts } from '../actions/product'
import { connect } from "react-redux";
import Uploady from "@rpldy/uploady";
import UploadButton from '@rpldy/upload-button';
import UploadPreview from '@rpldy/upload-preview';
const Product = (props) => {
    useEffect(() => {
        props.getAllProducts();
    }, [])
    return (
        <>
            <div className="allProducts">
                <h1>Products List</h1>
                {props.arr.map(i => <div key={i._id} >
                    {i.name + "  "}{i.description}</div>)}
                <Uploady destination={{ url: "https://my-server.com/upload" }}
                    accept="image/*">
                    <UploadButton />
                    <UploadPreview />
                </Uploady>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return { arr: state.productArr };
}
export default connect(mapStateToProps, { getAllProducts })(Product);

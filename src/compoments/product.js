import React from "react";
const SingleProduct = ({title,number,paragraph})=>{
        return(
            <div className="singleProduct">
                <h2>{number}</h2>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
        );
}
function Product (){
    const productList=[
        {
            n:"01",
            t:"Track company-wide progress",
            p:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        },
        {
            n:"02",
            t:"Advanced built-in reports",
            p:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        },
        {
            n:"03",
            t:"Everything you need in one place",
            p:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        },
    ]
    return(
        
        <div className="product center-content">
            
            <div className="product-text">
                <h1>What’s different about Manage?</h1>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                
            </div>
            <div className="product-list">
                {productList.map(product=>(
                    <SingleProduct number={product.n}
                    title={product.t}
                    paragraph={product.p} />
                ))}
            </div>
        </div>
    );
}
export default Product;
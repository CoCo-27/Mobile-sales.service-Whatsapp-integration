import { React, useEffect, useState } from 'react';
import '../homePage/ListProduct.css';
import Cards from '../homePage/Cards';

const ListProduct = (items) => {
    return (
        <div className="Product-list">
            {items.productCode.slice(0, items.numberShow).map((item, index) => {
                return <Cards keyId={index} item={item} icon={items.NewIcon} />;
            })}
        </div>
    );
};

export default ListProduct;

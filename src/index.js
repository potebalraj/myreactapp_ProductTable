import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category:'Sporting Goods', price:'$22.34', stocked: true, name:'Baseball'},
    {category:'Sporting Goods', price:'$54.45', stocked:false, name:'Basketball'},
    {category:'Electronics', price:'$1000.04', stocked:true, name:'iPhone'},
    {category:'Electronics', price:'$500.99', stocked:true, name:'TV' },
    {category:'Electronics', price:'$200.99', stocked:false, name:'Nexus 7'}
];


ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();

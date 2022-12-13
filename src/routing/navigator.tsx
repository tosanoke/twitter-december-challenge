import { Routes, Route } from 'react-router-dom';
import {
    HOME,
    PRODUCT,
    PRODUCT_DETAIL,
    AUCTION,
    AUCTION_DETAIL,
    DROP,
    ANY_ROUTE
} from './routes'

import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import ProductDetails from '../pages/Product/ProductDetails';
import Auction from '../pages/Auction/Auction';
import AuctionDetails from '../pages/Auction/AuctionDetails';
import Drop from '../pages/Drop/Drop';

import NavBar from '../components/header/header'
import Footer from '../components/footer/footer'




const Navigator = () => {
    return (
        <>
        <NavBar />
        <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={PRODUCT} element={<Product />} />
        <Route path={PRODUCT_DETAIL} element={<ProductDetails />} />
        <Route path={AUCTION} element={<Auction />} />
        <Route path={AUCTION_DETAIL} element={<AuctionDetails />} />
        <Route path={DROP} element={<Drop />} />
        <Route path={ANY_ROUTE} element={<div>NOT FOUND PAGE</div>} />
        </Routes>
        <Footer />
        </>
        
    );
};

export default Navigator;
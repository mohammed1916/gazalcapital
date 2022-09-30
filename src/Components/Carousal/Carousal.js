import React from 'react';
import { carousal } from '../../store/carousal.js.js'
import CarousalComponent from './CarousalComponent.jsx';


function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}

export default function Carousal() {
    var siteURLName = getURLUsername(window.location.pathname);
    var data = carousal[siteURLName];
    return (
        <>
            <CarousalComponent data={data} maxWidth={1080} />
        </>
    );
}
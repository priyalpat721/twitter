import React, {useEffect, useState} from "react";

const helloURL = 'http://localhost:4000/hello';
// const helloURL = 'https://web-dev-node-pripat.herokuapp.com/hello'
const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch(helloURL)
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;
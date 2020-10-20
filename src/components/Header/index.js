import React from 'react';

export default class Header extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={process.env.PUBLIC_URL + "icon.png"} alt="" width="30" height="30"
                             className="d-inline-block align-top mr-2" />
                            Menu CROUS
                    </div>
                    <a className="btn text-white" style={{backgroundColor:"#d30304"}} rel="noopener noreferrer" target="_blank" href="https://crousandgo.crous-versailles.fr/home">
                        Commander
                    </a>
                </div>
            </nav>
        );
    }
}

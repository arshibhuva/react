import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default function Api_practice() {
    const [val, setval] = useState([]);
    const [status, setstatus] = useState(false)

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')

            .then(function (response) {
                // handle success
                setval(response.data.results);
                setstatus(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    })
    if (status) {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src={require('../img/logo.jpeg')} className='bg-black' width={'50px'} alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ms-auto">
                                    <a className="nav-link" href="#">Docs</a>
                                    <a className="nav-link" href="#">About</a>
                                    <a className="nav-link" href="#">
                                        <div className="button">SUPPORT US</div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className='text-center title'>The Rick and Morty API</h1>
                        </div>
                    </div>
                </div>
                <div className="main-body bg-dark">
                    <div className="container">

                        <div className="row my-5 gx-5 ">

                            {
                                val.map((item) => {
                                    return (
                                        <>

                                            <div className="col-lg-6 col-md-12 d-flex box ps-0 gx-5 me-5">
                                                <div className="cartoon-img">
                                                    <img src={item.image} className='w-100' alt="" />
                                                </div>
                                                <div className="info text-white">
                                                    <div className="section">
                                                        <a href="#">{item.name}</a>
                                                        <span className="stutus d-flex">
                                                            <span className="staus-icon" style={item.status == 'Alive' ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></span>
                                                            <h5>{item.status} - {item.species}</h5>
                                                        </span>
                                                    </div>
                                                    <div className="section2 d-flex">
                                                        <p>Last known location:</p>
                                                        <span>{item.origin.name}</span>
                                                    </div>
                                                    <div className="section3 d-flex">
                                                        <p>First seen in:</p>
                                                        <span>{item.location.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </>
        )
    } else {
        return (
            <>
                <h1>hellow</h1>
            </>
        )
    }

}

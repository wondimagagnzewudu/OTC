
import React, { useState, useRef, useEffect } from 'react';

import { Popover, Input, Menu, Dropdown, Card } from 'antd';

import { Link } from 'react-router-dom';

import bird2 from '../components/suura/poto/nega.jpg';
import lake2 from '../components/suura/poto/lelise.jpg'
import hotel2 from '../components/suura/poto/hotel.jpg';
import tour2 from '../components/suura/poto/tour2.jpg';
import animal2 from '../components/suura/poto/animal.jpg';
import geda3 from '../components/suura/poto/geda2.jpg';
import bird3 from '../components/suura/poto/bird3.jpg';
const Cards = (props) => {
    return (
        <Card hoverable style={{ margin: '10px', height: '450px' }} className="card">

            <img
                style={{ height: '60%' }}
                className="card-img-top"
                src={props.featureImage}
                alt={props.title}
            />
            <div className="card-body">
                <h6 style={{ display: 'flex', justifyContent: 'center', }} className="mt-0 mb-2">{props.title}</h6>
                <h6 style={{ fontSize: '15.0px', color: '#000000', display: 'flex', justifyContent: 'center', }} className="mt-0 mb-2">{props.description}</h6>
                <a style={{ display: 'flex', justifyContent: 'center', }} href={props.link} >
                    contact
        </a>
            </div>
        </Card>
    );
}

const Contactus = () => {

    return (
        <>
            <div>
                <li style={{ backgroundColor: '#f24141', display: 'flex', justifyContent: 'center', paddingTop: '150px' }} class=" unifiednav__item-wrap " data-auto="more-pages">
                    <a href="/ourteam" class="unifiednav__item  dmNavItemSelected  dmUDNavigationItem_010101467867  " target="" data-target-page-alias="" data-auto="selected-page">
                        <span class="nav-item-text " ></span>
                        <h1 style={{ color: '#FFFFFF' }} >OUR TEAM</h1>

                        <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: 1, borderColor: '#FFFFFF' }} />

                    </a>
                </li>

                <div style={{ paddingLeft: '10%', paddingRight: '10%', margin: 'auto' }}>
                    <h3 style={{ color: '#000000' }} >Management</h3>

                    <hr style={{ color: '#000000', backgroundColor: '#000000', height: 1, borderColor: '#000000' }} />
                    <div className="row">
                        <div className="col-sm-4">
                            <Cards

                                featureImage={`${bird2}`}
                                title="nega wedajo"
                                description=" work title"
                                link="https://sebhastian.com/interactive-react-form"
                            />
                        </div>
                        <div className="col-sm-4">
                            <Cards
                                featureImage={`${lake2}`}
                                title="lelise dhuga"
                                description="work title."
                                link="https://sebhastian.com/babel-guide"
                            />
                        </div>
                        <div className="col-sm-4">
                            <Cards
                                featureImage={`${bird2}`}
                                title="nega wedajo"
                                description="work title"
                                link="https://sebhastian.com/js-before-react"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactus;

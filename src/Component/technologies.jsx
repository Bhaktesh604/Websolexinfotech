import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import photoshop from '../Assets/adobe-photoshop.png'
import illustrator from '../Assets/illustrator copy.png'
import figma from '../Assets/figma copy.png'
import cdr from '../Assets/cdr.png'
import indesign from '../Assets/adobe-indesign.png'
import aftereffect from '../Assets/after-effects.png'

import wordpress from '../Assets/wordpress copy.png'
import bootstrap from '../Assets/bootstrap (1).png';
import shopify from '../Assets/bag.png'
import webflow from '../Assets/webflow_logo_icon_169218.png'
import framar from '../Assets/framar.png'
import laravel from '../Assets/laravel copy.png'
import vuejs from '../Assets/vuejs.png'
import angular from '../Assets/Angular-Js.png'
import nextjs from '../Assets/next-js.svg'

import android from '../Assets/android copy.png'
import reactnative from '../Assets/react_native.svg'
import flutter from '../Assets/flutter.png'
import ios from '../Assets/ios copy.png'
import dart from '../Assets/dart copy.png'
import kotlin from '../Assets/kotlin copy.png'
import xcode from '../Assets/xcode_alt_macos_bigsur_icon_189542.png'


import html from '../Assets/html.png'
import css from '../Assets/css.png'
import php from '../Assets/php copy.png'
import nodejs from '../Assets/node copy.png'
import Javascript from '../Assets/node js.png';
import typescript from '../Assets/typescript.png'
import python from '../Assets/python.png'

import mysql from '../Assets/mysql copy.png'
import nosql from '../Assets/nosql.png'
import mongodb from '../Assets/mongodb copy.png'
import firebase from '../Assets/firebase copy.png'
import blander from '../Assets/blender copy.png'

import aws from '../Assets/aws.png'
import googlecloud from '../Assets/google cloud.png'
import digitalocean from '../Assets/digitalocean copy.png'

const TechnologiesSection = () => {
    const [activeTab, setActiveTab] = useState('Design');

    const tabs = ['Design', 'Web Devlopment', 'App Development', 'Fremwork', 'Database', 'Cloud '];
    const technologies = {
        'Design': [
            { id: 1, name: 'photoshop', src: photoshop, alt: 'photoshop.png' },
            { id: 2, name: 'Illustrator', src: illustrator, alt: 'Illustrator.png' },
            { id: 3, name: 'figma', src: figma, alt: 'figma text.png' },
            { id: 4, name: 'cdr', src: cdr, alt: 'cdr.png' },
            { id: 5, name: 'indesign', src: indesign, alt: 'adobe-indesign.png' },
            { id: 6, name: 'aftereffect', src: aftereffect, alt: 'after-effects.png' },
        ],
        'Web Devlopment': [
            { id: 1, name: 'wordpress', src: wordpress, alt: 'wordpress.png' },
            { id: 2, name: 'bootstrap', src: bootstrap, alt: 'bootstrap.png' },
            { id: 3, name: 'shopify', src: shopify, alt: 'shopify.png' },
            { id: 4, name: 'webflow', src: webflow, alt: 'webflow.png' },
            { id: 5, name: 'framar', src: framar, alt: 'framar.png' },
            { id: 6, name: 'laravel', src: laravel, alt: 'laravel.png' },
            { id: 7, name: 'vue js', src: vuejs, alt: 'vuejs.png' },
            { id: 8, name: 'angular', src: angular, alt: 'angular.png' },
            { id: 10, name: 'react js', src: reactnative, alt: 'reactjs.png' },
            { id: 9, name: 'nextjs', src: nextjs, alt: 'nextjs.png' },

        ],
        'App Development': [
            { id: 1, name: 'android', src: android, alt: 'android.png' },
            { id: 2, name: 'react native', src: reactnative, alt: 'react native.png' },
            { id: 3, name: 'flutter', src: flutter, alt: 'flutter.png' },
            { id: 4, name: 'ios', src: ios, alt: 'ios.png' },
            { id: 5, name: 'dart', src: dart, alt: 'dart.png' },
            { id: 6, name: 'kotlin', src: kotlin, alt: 'kotlin.png' },
            { id: 7, name: 'xcode', src: xcode, alt: 'xcode.png' },
        ],
        'Fremwork': [
            { id: 1, name: 'html', src: html, alt: 'php.png' },
            { id: 2, name: 'css', src: css, alt: 'php.png' },
            { id: 3, name: 'bootstrap', src: bootstrap, alt: 'bootstrap.png' },
            { id: 4, name: 'nodejs', src: nodejs, alt: 'nodejs.png' },
            { id: 5, name: 'Javascript', src: Javascript, alt: 'nodejs.png' },
            { id: 6, name: 'typescript', src: typescript, alt: 'typescript.png' },
            { id: 7, name: 'php', src: php, alt: 'php.png' },
            { id: 8, name: 'python', src: python, alt: 'python.png' },
        ],
        'Database': [
            { id: 1, name: 'mysql', src: mysql, alt: 'mysql.png' },
            { id: 2, name: 'nosql', src: nosql, alt: 'mongodb.png' },
            { id: 3, name: 'mongodb', src: mongodb, alt: 'mongodb.png' },
            { id: 4, name: 'firebase', src: firebase, alt: 'firebase.png' },
            { id: 5, name: 'blender', src: blander, alt: 'blender.png' },
        ],
        'Cloud': [
            { id: 1, name: 'aws', src: aws, alt: 'aws.png' },
            { id: 2, name: 'google cloud', src: googlecloud, alt: 'googlecloud.png' },
            { id: 3, name: 'digital ocean', src: digitalocean, alt: 'digitalocean.png' },
        ]
    };

    return (
        <section className="technologies_section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4 text-center">
                        <h1>Technological Mastery</h1>
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-tabs justify-content-center border-0">
                            {tabs.map(tab => (
                                <li className="nav-item px-lg-3" key={tab}>
                                    <a
                                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                        href="#!"
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="tab-content">
                            <div className="row justify-content-center flex-wrap ">
                                {technologies[activeTab].map(tech => (
                                    <div key={tech.id} className="col-6 col-md-3 col-lg-2 rounded-1 text-center d-flex ">
                                        <div className="card pb-3">
                                            <div className="d-flex col-12 justify-content-center  my-3   rounded-5">
                                                <img src={tech.src} alt={tech.alt} className=" border-0 img-fluid col-7 rounded-5 p-3" />
                                            </div>
                                            <span className='text-center text-uppercase' > {tech.name} </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;

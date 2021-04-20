import React, { Fragment } from 'react';
import { Image } from '../../utils/Images'
import { Icon } from 'react-icons-kit'
import { star } from 'react-icons-kit/ikons/'

import './style.scss'

const Banner = () => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-body ">
                    <div className="row p-2">
                        <div className="col-12 col-md-8 position-relative">
                            <div className="position-absolute slider-post-title p-4 ">
                                <h1 className="font-weight-bold">শুরুর প্রথম ৫ ঘণ্টায় হাসপাতালটিতে ভর্তি ৪০ করোনা রোগী</h1>
                                <p className="text-uppercase font-weight-normal">20 April 2021</p>
                            </div>
                            <img src={Image.CoronaImage} className="slider-image" alt="" />
                        </div>
                        <div className="col-12 col-md-4">
                            <strong>
                            <Icon icon={star} />
                            নির্বাচিত লেখা
                            </strong>
                            <div className="d-flex pt-4">
                                <div className="flex-shrink-0">
                                    <img src={Image.CoronaImage} className="featured-post-image" alt="" />
                                </div>
                                <div className="flex-grow-1 ms-3 pl-2">
                                    <p>শুরুর প্রথম ৫ ঘণ্টায় হাসপাতালটিতে ভর্তি ৪০ করোনা রোগী</p>
                                </div>
                            </div>
                            <div className="d-flex pt-4">
                                <div className="flex-shrink-0">
                                    <img src={Image.CoronaImage} className="featured-post-image" alt="" />
                                </div>
                                <div className="flex-grow-1 ms-3 pl-2">
                                    <p>শুরুর প্রথম ৫ ঘণ্টায় হাসপাতালটিতে ভর্তি ৪০ করোনা রোগী</p>
                                </div>
                            </div>
                            <div className="d-flex pt-4">
                                <div className="flex-shrink-0">
                                    <img src={Image.CoronaImage} className="featured-post-image" alt="" />
                                </div>
                                <div className="flex-grow-1 ms-3 pl-2">
                                    <p>শুরুর প্রথম ৫ ঘণ্টায় হাসপাতালটিতে ভর্তি ৪০ করোনা রোগী</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default Banner;
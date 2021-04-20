import React, { Fragment } from 'react';
import './style.scss'
import { Icon } from 'react-icons-kit'
import { user, facebook, youtube, twitter, alignJustify, search } from 'react-icons-kit/feather'
import { Image } from '../../utils/Images'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Fragment>
            <div className="container">
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><img src={Image.Logo} className="logo" alt="logo" /></div>
                    <div class="p-2 bd-highlight">
                        {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form> */}
                        <Link
                            to="/login"
                            type="button"
                            className="btn shadow-sm "
                        >
                            <Icon size={'25px'} icon={facebook} />
                        </Link>
                    </div>
                    <div class="p-2 bd-highlight">
                        <Link
                            to="/login"
                            type="button"
                            className="btn shadow-sm "
                        >
                            <Icon size={'25px'} icon={youtube} />
                        </Link>
                    </div>
                    <div class="p-2 bd-highlight">
                        <Link
                            to="/login"
                            type="button"
                            className="btn shadow-sm "
                        >
                            <Icon size={'25px'} icon={twitter} />
                        </Link>
                    </div>
                    <div class="p-2 bd-highlight">
                        <Fragment>|</Fragment>
                        <Link
                            to="/login"
                            type="button"
                            className="btn shadow-sm btn-active"
                        >
                            <Icon size={'25px'} icon={user} />
                            {/* Login */}
                        </Link> </div>
                </div>

                <div class="d-flex bd-highlight mb-3 align-items-center font-weight-bold " >
                    <div class="p-2 bd-highlight">
                        <Link
                            type="button"
                            className="btn shadow-sm text-dark"
                            style={{ color: "black" }}
                        >
                            <Icon size={'25px'} icon={alignJustify} />
                        </Link>
                    </div>
                    <div class="p-2 bd-highlight">
                        <Link to="#">বিশেষ সংবাদ</Link>
                    </div>
                    <div class="p-2 bd-highlight">রাজনীতি</div>
                    <div class="p-2 bd-highlight">করোনাভাইরাস</div>
                    <div class="p-2 bd-highlight">বাংলাদেশ</div>
                    <div class="p-2 bd-highlight">বিশ্ব</div>
                    <div class="p-2 bd-highlight">বিনোদন</div>
                    <div class="ml-auto p-2 bd-highlight">
                        <Link >
                            <Icon size={'25px'} icon={search} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0  ">
                <div className="shadow-lg " style={{ background: "black" }}>
                    <h1 className="text-uppercase text-center p-3" style={{ fontWeight: "800" }}>Advertisement</h1>
                </div>
            </div>

        </Fragment>
    );
};

export default NavBar;
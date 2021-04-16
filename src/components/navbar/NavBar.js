import React, { Fragment } from 'react';
import './style.scss'
import { Icon } from 'react-icons-kit'
import { logIn, user, facebook, youtube, twitter, alignJustify } from 'react-icons-kit/feather'
import { Form, FormControl } from 'react-bootstrap'
import { Image } from '../../utils/Images'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
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
            {/* navbar */}
            {/* <div class="d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
                <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
                <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
                <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
                <div class="p-2 bd-highlight">Flex item</div>
                <div class="p-2 bd-highlight">Third flex item</div>
            </div> */}

            <div class="d-flex bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <Link
                        to="/login"
                        type="button"
                        className="btn shadow-sm "
                    >
                        <Icon size={'25px'} icon={alignJustify} />
                    </Link>
                </div>
                <div class="p-2 bd-highlight">Flex item</div>
                <div class="p-2 bd-highlight">Flex item</div>
                <div class="p-2 bd-highlight">Flex item</div>
                <div class="ml-auto p-2 bd-highlight">Flex item</div>
            </div>
        </div>
    );
};

export default NavBar;
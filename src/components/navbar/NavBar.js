import React from 'react';
import './style.scss'
import { Icon } from 'react-icons-kit'
import { logIn } from 'react-icons-kit/feather'
import { Form, FormControl } from 'react-bootstrap'
import { Image } from '../../utils/Images'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container">
            <div class="d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight"><img src={Image.Logo} className="logo" alt="logo" /></div>
                <div class="p-2 bd-highlight">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </div>
                <div class="p-2 bd-highlight">
                    <Link
                        to="/login"
                        type="button"
                        className="btn shadow "
                    >
                        <Icon size={'35px'} icon={logIn} />
                    </Link> </div>
            </div>
        </div>
    );
};

export default NavBar;
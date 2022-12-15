import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Yoyo = () => {
    const user = useSelector((state) => state.user.name);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {user ? <p>Hello {user}</p> : <p>Please log in</p>}
                    <div className="card">
                        <div className="card-header">Landing Page</div>
                        <Link to='/dashboard/main' className='btn btn-light my-3'>
                        Dashboard
                        </Link>
                        <Link to='/boom' className='btn btn-primary my-3'>
                        Testing
                        </Link>
                        <Link to='/home/main' className='btn btn-light my-3'>
                        Home
                        </Link>
                        <Link to='/map' className='btn btn-light my-3'>
                        Map
                        </Link>
                        <Link to='/register' className='btn btn-light my-3'>
                        Register
                        </Link>
                        <Link to='/signin' className='btn btn-light my-3'>
                        Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Yoyo;
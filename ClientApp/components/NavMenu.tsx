import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to={ '/' }>Image Manager</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/flaggedimages' } activeClassName='active'>
                                <span className='glyphicon glyphicon-exclamation-sign'></span> Flagged Images
                            </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top border border-primary rounded'>
			<div className='container-fluid'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item me-3'>
						<NavLink className='btn btn-primary' to='/'role='button'>
							HOMEPAGE
						</NavLink>
					</li>
					<li className='nav-item me-3'>
						<NavLink className='btn btn-primary' to='/admin' role='button'>
							ADMIN
						</NavLink>
					</li>
					<li className='nav-item me-3'>
						<NavLink className='btn btn-primary' to='/quiz-stepper' role='button'>
							PRACTICE
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;
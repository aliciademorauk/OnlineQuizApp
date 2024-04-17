import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
	return (
		<section className='container'>
			<h2 className='mt-5'>Question Database</h2>
			<hr />
			<nav className='nav flex-column'>
				<Link to={'/create-quiz'} className='nav-link'>
					Add New Questions
				</Link>
				<Link to={'/all-questions'} className='nav-link'>
					View and Edit Questions
				</Link>
			</nav>
		</section>
	)
}

export default Admin
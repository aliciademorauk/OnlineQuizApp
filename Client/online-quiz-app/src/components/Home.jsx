import React from 'react';

const Home = () => {
    return (
        <section className='d-flex justify-content-between mt-5'>
            <div className='shadow-lg rounded text-white bg-primary p-4'>
                <h3 className='mb-4' style={{ fontSize: '6rem' }}>Meet the best study-buddy.</h3>
                <h1 className='mb-4' style={{ fontSize: '2.5rem' }}>Start learning now!</h1>
            </div>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<img className='w-75 mb-3' src='../../img/question-mark.png' alt='Question' />
				<a href='https://www.flaticon.com/free-icons/ui' title='ui icons' style={{ fontSize: '0.25rem' }}>
					<small>Ui icons created by Freepik - Flaticon</small>
				</a>
			</div>
        </section>
    );
};

export default Home;

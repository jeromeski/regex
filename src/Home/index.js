import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Home = () => {
	return (
		<div className='row'>
			<h1>Chapter 7 : Groups</h1>
			<ListGroup>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/specifying-options'>Specifying Options</Link>
					</Button>
				</ListGroupItem>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/using-grouping-1'>Using grouping 1</Link>
					</Button>
				</ListGroupItem>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/using-grouping-js'>Using grouping in JS</Link>
					</Button>
				</ListGroupItem>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/capturing-groups'>Capturing Groups</Link>
					</Button>
				</ListGroupItem>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/back-references'>Back References</Link>
					</Button>
				</ListGroupItem>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/look-ahead'>Look Ahead Groups</Link>
					</Button>
				</ListGroupItem>
				<ListGroupItem>
					<Button color='link'>
						<Link to='/quiz-7'>Quiz Chapter 7</Link>
					</Button>
				</ListGroupItem>
			</ListGroup>
		</div>
	);
};

export default Home;

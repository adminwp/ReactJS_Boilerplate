import React, { Component } from 'react';
import './App.css';
import Logo from './UI/Logo';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

class App extends Component {
	render() {
		const getColorLevel1 = getComputedStyle(
			document.firstElementChild
		).getPropertyValue('--dark-color-level-1');

		const getColorLevel5 = getComputedStyle(
			document.firstElementChild
		).getPropertyValue('--dark-color-level-5');

		return (
			<div className="App">
				<div className="App__top">
					<div className="container">
						<div className="row">
							<h2 className="App__title">App Component</h2>
							<div className="App__logo">
								<Logo
									firstColor={getColorLevel1}
									secondColor={getColorLevel5}
								></Logo>
							</div>
							<p className="App__description">
								To Change the Application, You Must Go To the Following Path
								{<br></br>}
								Root Project / src / components / App.js
							</p>
						</div>
					</div>
				</div>

				<Cards wrapperClassName="App"></Cards>
				<Footer wrapperClassName="App"></Footer>
			</div>
		);
	}
}
export default App;

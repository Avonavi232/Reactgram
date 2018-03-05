import React from 'react';

function Header(props) {

	return (
			<header className="app-header">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="app-logo">
								<span className="icon-heart"></span>
								<span>YellowGallery</span>
							</div>
						</div>
						<div className="col-sm-6 app-upload">
							<button
									className="app-upload__button button button_primary"
									onClick={() => {props.openLoaderHandler(true)}}
							>
								Загрузить фото
							</button>
						</div>
					</div>
				</div>
			</header>
	);
}

export default Header;
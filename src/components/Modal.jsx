import React from 'react';

function Modal(props) {
	return (
			<div className="modal js-upload-modal upload-modal">
				<div className="container modal-content">
					{props.children}
				</div>
			</div>
	);
}

export default Modal;
import React from 'react';
import Modal from './Modal';

function LoaderModal(props) {
	return (
			<Modal>
				<form className="js-upload-form" action="#">
					<header className="modal__header clearfix">
						<span
								className="modal__close js-modal-close"
								onClick={() => {props.openLoaderHandler(false)}}
						>×</span>
					</header>
					<main className="modal__body">
						<div className="text-right">
							<div>
								<div className="js-upload-input-replacer upload-modal__open-pic button button_secondary">Выбрать фото</div>
								<input className="js-upload-input" type="file" hidden/>
							</div>
						</div>
						<div className="justified">
							<div className="js-upload-image-preview upload-modal__preview"></div>
							<div className="upload-modal__drop-area upload-modal__drop-area js-drop-area">
								<p>Перетащите фото в эту область</p>
							</div>
						</div>
						<p className="text-center js-error error"></p>
					</main>
					<footer className="modal__footer clearfix">
						<button type="reset" className="js-upload-cancel button button_secondary">Отменить</button>
						<button type="submit" className="js-upload-form-submit button button_primary">Подтвердить</button>
					</footer>
				</form>
			</Modal>
	);
}

export default LoaderModal;
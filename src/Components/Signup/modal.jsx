const Modal = (props) => {

    const sizeClass = (props.id === 'terms-n-conditions')? 'modal-lg': '';
    const scroll = (props.scrollable === true)? 'modal-dialog-scrollable': '';

	return(
		<div className="modal fade" id={props.id}
			tabIndex={-1} 
			aria-labelledby='modalLabel' aria-hidden='true'
			data-bs-backdrop='static'
			data-bs-keyboard='false'
		>
			<div className={`modal-dialog ${sizeClass} modal-dialog-centered ${scroll}`}>
				<div className="modal-content bg-light rounded-4">
					<div className="modal-header border-bottom-0">
						<h4 className="modal-title w-100 d-block text-center" id='modalLabel'>{props.title}</h4>
						<button className="btn-close bg-body-secondary rounded-pill" type='button' data-bs-dismiss='modal' aria-label='close'></button>
					</div>
					<div className="modal-body">
						{props.body()}
					</div>
                    <div className="modal-footer border-top-0">
                        {props.footer? props.footer(): ''}
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Modal
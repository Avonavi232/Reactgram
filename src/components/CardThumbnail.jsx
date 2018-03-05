import React from 'react';

function CardThumbnail(props) {
	const {dataId, src, likes, comments, seen, art} = props;
	return (
			<div
					className="card-thumbnail"
					data-id={dataId}>
				<div className="card-thumbnail__overlay"></div>
				<div className="card-thumbnail__stats stats">
					<table>
						<tbody>
						<tr>
							<td><p className="stat"><span className="icon-heart"></span><span>{likes}</span></p></td>
							<td><p className="stat"><span className="icon-bubble"></span><span>{comments}</span></p></td>
						</tr>
						<tr>
							<td><p className="stat"><span className="icon-eye"></span><span>{seen}</span></p></td>
							<td><p className="stat"><span className="icon-pencil"></span><span>{art}</span></p></td>
						</tr>
						</tbody>
					</table>
				</div>
				<img src={src}/>
			</div>
	);
}

export default CardThumbnail;
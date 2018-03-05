import React from 'react';
import CardThumbnail from './CardThumbnail';

function Feed(props) {
	const {feedItems} = props;
	if (!feedItems || !feedItems.length) return (
			<div className="container text-center">
				<h2>Loading</h2>
			</div>
	);

	const rowedFeedItems = [];
	feedItems.forEach(function (item, index) {
		(index % 3) || rowedFeedItems.push([]);
		rowedFeedItems[rowedFeedItems.length - 1].push(item);
	});

	return (
			<main>
				<div className="js-feed container">
					{rowedFeedItems.map(function (row, i) {
						return (
								<div className="row" key={i}>{
									row.map(function (item) {
										return (
												<div key={item.id} className="col-sm-4">
													<CardThumbnail
															dataId={item.id}
															src={item.src}
															likes={item.likes}
															comments={item.comments}
															seen={item.seen}
															art={item.art}
													/>
												</div>
										);
									})
								}</div>
						);
					})}
				</div>
			</main>
	);
}

export default Feed;
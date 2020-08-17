import moment from 'moment';

const ItemCard = ({ index, title, url, author, points, comments, createdAt }) => (
    <div className="item-card" key={index}>
        <a href={url} target="_blank" className="item-card-link">
            {title}
        </a>
        <p className="item-card-text">Author: {author}</p>
        <p className="item-card-text">Comments: {comments.toLocaleString()} | Points: {points.toLocaleString()} | Created At: {moment(createdAt).format('DD MMM YYYY HH:mm:ss')} </p>
    </div>
)

export default ItemCard;
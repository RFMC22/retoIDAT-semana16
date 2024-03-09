const ReviewItem = ({ review, onDelete }) => {
  return (
    <div className='review'>
      <div className='flex'>
        <img src="/public/estrellas.png" alt="" />
        <p className='delete' onClick={onDelete}>&#x2715;</p>
      </div>
      <p className='comment'>
        {review.review}
      </p>
      <p className='person'>
        {review.name}
      </p>
    </div>
  )
}

export default ReviewItem
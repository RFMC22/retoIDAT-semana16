import { useState } from 'react'
import '../css/Reviews.css'
import ReviewItem from './ReviewItem';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    review: ''
  })

  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setReviews([...reviews, formData]);
    setFormData({ name: '', review: '' });
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const onDelete = (index) => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
  }

  return (
    <section className='reviews'>
        <h4>Custommer Reviews</h4>
      <div className="container flex gap-2">
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              name="name" 
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name...'
            />
          </div>
          <div>
            <input 
              type="text" 
              name="review" 
              id="review"
              value={formData.review}
              onChange={handleChange}
              placeholder='Reviews...' 
            />
          </div>
          <div>
            <input type="submit" value="SEND" id='submit' />
          </div>
        </form>
        <div className='content-review'>
          {reviews.map((review, index) => (
            <ReviewItem 
              key={index}
              review = {review}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
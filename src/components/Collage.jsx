import '../css/Collage.css'
const Collage = ({mode}) => {
  const four = mode === 'four';
  const doble = mode === 'doble';
  return (
    <>
      {
        four && 
        <div className='collage-four'>
          <img src="/public/square-1.jpg" alt="" />
          <img src="/public/square-2.jpg" alt="" />
          <img src="/public/square-3.jpg" alt="" />
          <img src="/public/square-4.jpg" alt="" />
        </div>
      }
      {
        doble && 
        <div className='collage-doble'>
          <img src="/public/bakers-delight-1.jpg" alt="" />
          <img src="/public/bakers-delight-2.jpg" alt="" />
        </div>
      }
    </>
  )
}

export default Collage
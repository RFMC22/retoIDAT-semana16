import ActionButton from "./ActionButton"
import '../css/Section.css'
import Collage from "./Collage"

const Section = ({title, subTitle, description, path, message, position, mode}) => {
  const styles = {
    backgroundImage: `url(/public/${path})`, 
    height: '400px', backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    display: 'flex'
  }
  return (
    <section style={mode === 'full' ? styles : null}>
      <article className={`container py-3 ${mode === 'full' ? '' : 'flex  gap-4'}`}>
        <div className="text-center" style={{order : position}}>
          <h3 className="section-title">
            {title}
            <span className="section-subtitle"> {subTitle}</span>
          </h3>
          <p className="description">
            {description}
          </p>
          <ActionButton message={message}/>
        </div>
        {description && mode === 'complete' 
        ? <img className="section-img" src={`/public/${path}`} alt="story" /> 
        : <Collage mode={mode}/>}
      </article>
    </section>
  )
}

export default Section
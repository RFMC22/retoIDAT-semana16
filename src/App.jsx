// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Header, Swiper, Section, Reviews} from './components'

function App() {
  return (
    <main>
      <Header/>
      <Swiper/>
      <Section
        title = {'Discover'}
        subTitle = {'Our Story'}
        description = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit fugiat quasi excepturi explicabo amet sed deserunt?'}
        path={'story-img.jpg'}
        message={'Learn More'}
        mode={'complete'}
      />
      <Section 
        title = {'Always'}
        subTitle = {'Fresh'}
        mode = {'full'}
        path={'tasteful-recipes.jpg'}
      />
      <Section 
        title = {'Explore'}
        subTitle = {'Menu'}
        description = {'Lorem, ipsum dolor sit amet consectetur adipisicing pard esat dioas adipisicing asdo persi oscar elit. Sapiente sit fugiat quasi excepturi explicabo amet sed deserunt?'}
        path={'tasteful-recipes.jpg'}
        message={'See Full Menu'}
        position={1}
        mode={'four'}
      />
      <Section 
        title = {'Everything'}
        subTitle = {'Tasty'}
        mode={'full'}
        path={'tasty.jpg'}
      />
      <Section 
        title = {'Baker\'s'}
        subTitle = {'Delight'}
        description = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit fugiat quasi excepturi explicabo amet sed deserunt?'}
        message={'Make a Reservation'}
        mode={'doble'}
        path={'tasteful-recipes.jpg'}
      />
      <Reviews/>
    </main>
  )
}

export default App

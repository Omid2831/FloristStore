import Cards from '../components/Cards/Cards'
import Slider from '../components/Sliders/Slider'
import RootLayout from '../layout/RootLayout'

const Homepage = () => {
  return (
    <RootLayout>
      {/** Sliders */}
      <Slider />
      {/** Cards */}
      <Cards />
    </RootLayout>
  )
}

export default Homepage
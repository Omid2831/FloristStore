import Cards from '../components/Cards/Cards'
import Slider from '../components/Sliders/Slider'
import Shops from '../components/Shop/Shops'
import RootLayout from '../layout/RootLayout'

const Homepage = () => {
  return (
    <RootLayout>
      {/** Sliders */}
      <Slider />
      {/** Cards */}
      <Cards />
      {/** Shops */}
      <Shops />
    </RootLayout>
  )
}

export default Homepage
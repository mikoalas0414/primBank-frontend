import { Banner } from './Pages/Banner'
import { Exchanges } from './Pages/Exchanges'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.module.css'
import { FeaturesA } from './Pages/FeaturesA/index'
import { HowToBuy } from './Pages/HowToBuy'
import { RewardsInfo } from './Pages/RewardsInfo'

export function Home() {
  return (
    <>
      <div id="banner" className={styles.bg + ' container-fluid'}>
        <Banner />
      </div>
      <div id="features" className={styles.features + ' container-fluid'}>
        <Exchanges />
      </div>
      <div id="FeaturesA" className="container-fluid">
        <FeaturesA />
      </div>
      <div id="rewardsInfo" className="container-fluid">
        <RewardsInfo />
      </div>
      <div id="how-to-buy" className={styles.howToBuy + ' container-fluid'}>
        <HowToBuy />
      </div>
    </>
  )
}

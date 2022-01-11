import styles from './styles.module.scss'
import { Coins } from './Coins'

export function HowToBuy() {
  return (
    <>
      <div className={styles.content + ' container'}>
        <Coins />
      </div>
    </>
  )
}

import { Title } from './Title'
import { SubTitle } from './Subtitle'
import { Button } from './Button'
import styles from './styles.module.scss'

export function Banner() {
  return (
    <>
      {/* TITLE & SUBTITLE AND PARAGRAPH*/}
      <div className={styles.container_Banner}>
        <Title />
        <SubTitle />

        <div className={styles.botoes + ' d-flex justify-content-center'}>
          <Button text="BUY NOW" filled />
          <Button text="CLAIM REWARDS" outlined />
        </div>
      </div>
    </>
  )
}

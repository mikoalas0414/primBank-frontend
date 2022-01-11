import { SubTitle } from './Subtitle'
import { Button } from './Button'
import styles from './styles.module.scss'

export function Banner() {
  return (
    <>
      {/* TITLE & SUBTITLE AND PARAGRAPH*/}
      <div className={styles.container_Banner}>
        <div className="row">
          <div style={{ padding: '80px' }} className="col-md-6">
            <SubTitle />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'start',
              marginBottom: '50px',
            }}
            className="imgs col-md-6"
          >
            <div className="img1 col-md-2">
              <img
                style={{
                  width: '150%',
                  height: '100%',
                  position: 'relative',
                  top: '300px',
                  left: '300px',
                }}
                src="https://staage.com/_nuxt/img/logo-footer.463bf78.svg"
                alt="logo"
              />
            </div>
            <div className="img2 col-md-2">
              <img
                style={{
                  width: '150%',
                  height: '100%',
                  position: 'relative',
                  top: '400px',
                  left: '400px',
                }}
                src="https://www.oprimorico.com.br/assets/img/logo-finclass.png"
                alt="logo2"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              position: 'relative',
              marginBottom: '230px',
            }}
            className={
              styles.botoes + ' col-md-12 d-flex justify-content-center'
            }
          >
            <Button style={{ color: 'black' }} text="BUY NOW" filled />
            <Button text="CLAIM REWARDS" outlined />
          </div>
        </div>
      </div>
    </>
  )
}

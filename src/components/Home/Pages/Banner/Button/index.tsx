import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

interface ButtonProps {
  text: string
  filled?: boolean
  outlined?: boolean
}

export function Button({ text, filled, outlined }: ButtonProps) {
  return (
    <>
      {filled ? (
        <a href="https://google.com/">
          <button className={styles.filled}>{text}</button>{' '}
        </a>
      ) : (
        <Link to="/dashboard">
          <button className={styles.outlined}>{text}</button>
        </Link>
      )}
    </>
  )
}

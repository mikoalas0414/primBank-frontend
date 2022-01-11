import {Link} from 'react-router-dom'

import './btnStyle.scss'
export function ButtonClaim() {
  return (
    <Link to="/claim">
      <div class="button-container-1">
        <span class="mas">Claim</span>
        <button id="work" type="button" name="Hover">
          Claim
        </button>
      </div>
    </Link>
  )
}

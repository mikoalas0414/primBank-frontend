import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCog } from '@fortawesome/free-solid-svg-icons'

export function SwapArea() {
  function handleSwap() {
    alert('Parabens a troca foi realizada com sucesso!')
  }
  return (
    <>
      <div id="swap-area">
        <div id="select-token-area">
          <div>
            <label>Selecione um Token:</label>
            <select id="swap-button" name="month">
              <option value="1">BNB</option>
              <option value="2"> PrimBank</option>
            </select>

            <p>0.0</p>
          </div>
        </div>

        <div id="target-token-area">
          <div id="swap-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <p id="logo">passive.</p>

          <input id="passive-quantity" type="number" name="quantity" />

          <div id="footer">
            <p>Balance: 0 Passive</p>
          </div>
        </div>

        <div id="swap-area-footer">
          <div id="left-text">
            <p>*Slippage=13%</p>
            <p>*Reffer = None</p>
          </div>

          <div id="gear-icon">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
      </div>
      <div id="swap-button">
        <button
          type="submit"
          onClick={() => {
            handleSwap()
          }}
        >
          Swap
        </button>
      </div>
    </>
  )
}

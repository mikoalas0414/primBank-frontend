import { useToken } from './useContract'
import { useWeb3 } from './useWeb3'
import BigNumber from 'bignumber.js'

import PRIMBANK_ABI from '../assets/abis/PrimBank.json'

export const ZERO_BALANCE = new BigNumber(0)

export const useClaimRewards = (requiredClaimedState) => {
  const PrimBankAddress = '0x0f4de3eF051AA3d982DA7975ac1Be17eC802EaBb'
  const contractPrimBank = useToken(PrimBankAddress, PRIMBANK_ABI.abi)
  const { account } = useWeb3()

  const claim = async () => {
    try {
      contractPrimBank.options.address =
        '0x0f4de3eF051AA3d982DA7975ac1Be17eC802EaBb'

      await contractPrimBank.methods
        .claim()
        .send({ from: account })
        .on('transactionHash', (hash) => {})
    } catch (e) {
      console.log(e)
    }
  }

  return {
    claim,
  }
}

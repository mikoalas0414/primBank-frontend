import { useMemo } from 'react'
import { useWeb3 } from './useWeb3'
import PRIMBANK_ABI from '../assets/abis/PrimBank.json'
import SWAP_ABI from '../assets/abis/PrimSwap.json'

const getContract = (abi, address, web3) => {
  if (web3) return new web3.eth.Contract(abi, address)
}

export const useContract = (abi, address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(abi, address, web3), [address, abi, web3])
}

export const useToken = (address) => {
  const { web3 } = useWeb3()
  return useMemo(
    () => getContract(PRIMBANK_ABI.abi, PRIMBANK_ABI.abi.address, web3),
    [web3],
  )
}

export const useSwap = (address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(SWAP_ABI.abi, SWAP_ABI.abi.address, web3), [
    web3,
  ])
}

export const useERC20 = (address) => {
  const { web3 } = useWeb3()
  return useMemo(
    () => getContract(PRIMBANK_ABI, PRIMBANK_ABI.abi.address, web3),
    [web3],
  )
}

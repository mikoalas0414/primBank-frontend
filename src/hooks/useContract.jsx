import { useMemo } from 'react'
import { useWeb3 } from './useWeb3'
import ERC20_ABI from '../assets/abis/ERC20.json'
import PRIMBANK_ABI from '../assets/abis/PrimBank.json'

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

export const useERC20 = (address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(ERC20_ABI, address, web3), [address, web3])
}

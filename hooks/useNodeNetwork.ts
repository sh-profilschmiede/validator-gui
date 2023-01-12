import useSWR from 'swr'
import { fetcher } from './fetcher';
import { NodeNetwork } from '../model/node-network';

export const useNodeNetwork = (): { network: NodeNetwork, isLoading: boolean, isError: boolean } => {
  const {data, error, isLoading} = useSWR(`http://localhost:8080/api/node/network`, fetcher)

  return {
    network: data,
    isLoading: false,
    isError: false
  }
};
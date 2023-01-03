import axios from 'axios'
import { useEffect, useReducer } from 'react'

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true }
    case 'response':
      return { ...state, loading: false, data: action.data }
    case 'error':
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}


export const useAxios = (url:string, options = {}) => {
  const [{ loading, error, data }, dispatch] = useReducer(dataReducer, {
    data: null,
    loading: false,
    error: null,
  })


  useEffect(() => {
    dispatch({ type: 'loading' })
    axios.get(url)
        .then((res) => {
            console.log(res.status, res.statusText)
            return res.data;
          })
        .then((data) => dispatch({ type: 'response', data }))
        .catch((error) => dispatch({ type: 'error', error }))
    
  }, [url])

  return { loading, error, data }
}

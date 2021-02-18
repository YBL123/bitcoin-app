import axios from 'axios'

export const getData = (currency) => {
  return axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${currency.toUpperCase()}.json`)
}

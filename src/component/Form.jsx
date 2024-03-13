import styled from "@emotion/styled"
import useSelectCurrency from "../hooks/useSelectCurrency"
import{currency} from '../data/currency'
import { useEffect, useState } from "react"
import Error from "./Error"

const QuoteButton=styled.input`
    background-color: #fbae56;
    border: none;
    width: 100%;
    padding: 10px;
    color: #b57019;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;
    
    &:hover{
        background-color: #ffbb57;
        color:#825011 ;
        cursor: pointer;
    }
`

const Form = () => {

  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)

  const [selectedCurrency, SelectCurrency] = useSelectCurrency('Select the Currency', currency)
  const [selectedCrypto, SelectCrypto] = useSelectCurrency('Select the Cyptocurrency', cryptos)

  useEffect(() => {
    const readAPI = async () => {
      const url="https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=EUR"
      const answer = await fetch(url)
      const result = await answer.json()
      const arrayCrypto = result.Data.map(crypto =>{
        const objectCrypto={
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return(objectCrypto);
      })
      setCryptos(arrayCrypto)
    }
    readAPI()
  }, [])
  const handleSubmit=e=>{
    e.preventDefault()
    if([selectedCurrency, selectedCrypto].includes('')){
      console.log('Surprise Motherfucker')
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <>
      {error && <Error>All Fields are Required</Error>}
      <form
        onSubmit={handleSubmit}
      >
          <SelectCurrency/>
          <SelectCrypto/>
          <QuoteButton type="submit" value="Quote"/>
      </form>
    </>
  )
}

export default Form
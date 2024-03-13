import { useEffect, useState } from 'react'
import Form from './component/Form'
import Answer from './component/Answer'
import Spinner from './component/Spinner'
import styled from '@emotion/styled'
import ImgCrypto from './img/imagen-criptos.png'


const Container =styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin:100px auto 0 auto;
  display:block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color:#FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #fbae56;
    display: block;
    margin: 10px auto 0 auto ;
  }

`


function App() {

  const [coin, setCoin]=useState({})
  const [quote, setQuote]=useState({})
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    if(Object.keys(coin).length> 0 ){
      const quoteCrypto = async () =>{
        setLoading(true)
        setQuote({})
        const{selectedCurrency, selectedCrypto}= coin
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedCrypto
      }&tsyms=${selectedCurrency}`
      const call = await fetch(url);
      const result = await call.json()
      setQuote(result.DISPLAY[selectedCrypto][selectedCurrency]);
      setLoading(false)
      }
      quoteCrypto()
    }
  }, [coin])
  
  return (
    <Container>
      <Image
        src={ImgCrypto}
        alt="image cryptocurrency"
      />
      <div>
        <Heading>Quote Cryptocurrencies Instantly</Heading>
        <Form
        setCoin={setCoin}
        />
        {loading && <Spinner/>}
        {quote.PRICE && <Answer quote={quote}/>}
      </div>    
    </Container>
  )
}

export default App

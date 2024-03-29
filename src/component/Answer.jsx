import styled from '@emotion/styled'

const Result = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Image= styled.img`
    display: block;
    width: 40%;
`

const Text = styled.p`
    font-size:18px;
    span{
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`


const Answer = ({quote}) => {
    const{PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE}=quote
  return (
    <Result>
        <Image src={`https://www.cryptocompare.com${IMAGEURL}`} alt='cryptocurrency image'/>
        <div>
            <Price>The Price is: <span>{PRICE}</span></Price>
            <Text>The Highest Today: <span>{HIGHDAY}</span></Text>
            <Text>The Lowest Today: <span>{LOWDAY}</span></Text>
            <Text>The Fluctuation today: <span>{CHANGEPCT24HOUR}%</span></Text>
            <Text>Last Update: <span>{LASTUPDATE}</span></Text>
        </div>
    </Result>
  )
}

export default Answer
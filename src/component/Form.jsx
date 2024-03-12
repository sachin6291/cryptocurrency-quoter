import styled from "@emotion/styled"

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
    
    &:hover{
        background-color: #ffbb57;
        color:#825011 ;
        cursor: pointer;
    }
`

const Form = () => {
  return (
    <form>
        <QuoteButton type="submit" value="Quote"/>
    </form>
  )
}

export default Form
import styled from "@emotion/styled"

const Message = styled.div`
    background-color: #fb7676;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Message>
        {children}
    </Message>
  )
}

export default Error
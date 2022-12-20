import styled from 'styled-components'

const Container = styled.div`
    width: 1150px;

    @media(max-width: 360px){
        width: 80vw
    }
`



const LargerContainer = styled.div`
    width: 90%;
    @media(max-width: 360px){
        width: 80vw
    }

`




export {Container, LargerContainer}
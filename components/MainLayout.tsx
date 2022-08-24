import { Children, FC } from "react"
import styled from "styled-components"

const MainLayout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	return (
        <Container>
            {children}
        </Container>
    )
}

export default MainLayout

const Container = styled.div`
    
`

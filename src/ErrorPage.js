import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextContainer, ButtonError } from "./components/style/Error.element";

function ErrorPage() {
    const navigate = useNavigate();

    return <div>
        <Container>
            <TextContainer>Error... this page doesn't exist</TextContainer>
        </Container>
        <ButtonError onClick={() => navigate('/')}> Back Home</ButtonError>
    </div>
    
}

export default ErrorPage;
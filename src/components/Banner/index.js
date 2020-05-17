import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img13 from '../../images/13.png';

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Divida com os amigos</Title>
                <Description>Peça aquela pizza e divida o valor com os amigos no PicPay!</Description>
            </Details>
            <Img source={img13} />
        </Container>
    );
}
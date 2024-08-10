import styled from "styled-components";

export const Container = styled.div`
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh ;
background-color: #111;

vm-player{
    width: 80%;
}
`;

export const Button = styled.button`
position: absolute;
right: 10px;
top: 10px;
width: 90px;
height: 42px;
border-radius: 12px;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;

background: transparent;
border: 1px solid #FFF;
color: #FFF;
opacity: 0.7;
cursor: pointer;
transition: 0.3s;

&:hover{
    opacity: 1;
}
`
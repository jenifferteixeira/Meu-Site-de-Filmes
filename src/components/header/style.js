import styled from "styled-components";

export const Container = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 60px;

nav{
    display: flex;
    align-items: center;
    gap: 16px;
}

a{
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: #FFF;
    transition: 0.3s;
    text-decoration: none;
    position: relative;
}

a:hover{
    opacity: 0.7;
}

a::after{
    content:"";
    width: 0;
    height: 2px;
    background-color: #FFF;
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: 0.3s;
}

a:hover ::after{
    width: 100%;
}
`;

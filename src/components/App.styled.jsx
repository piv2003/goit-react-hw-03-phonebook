import styled from 'styled-components';

export const AppBox = styled.div`
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 50px;
  padding: 20px;
  background: repeating-linear-gradient(
      190deg,
      rgba(247, 56, 56, 0.5) 40px,
      rgba(255, 153, 0, 0.5) 80px,
      rgba(255, 255, 0, 0.5) 120px,
      rgba(0, 255, 0, 0.5) 160px,
      rgba(125, 198, 247, 0.5) 200px,
      rgba(173, 72, 245, 0.5) 240px,
      rgba(238, 130, 238, 0.5) 280px,
      rgba(250, 62, 62, 0.5) 300px
    ),
    repeating-linear-gradient(
      -190deg,
      rgba(255, 0, 0, 0.5) 30px,
      rgba(255, 153, 0, 0.5) 60px,
      rgba(255, 255, 0, 0.5) 90px,
      rgba(0, 255, 0, 0.5) 120px,
      rgba(104, 186, 241, 0.5) 150px,
      rgba(216, 179, 243, 0.5) 180px,
      rgba(238, 130, 238, 0.5) 210px,
      rgba(255, 0, 0, 0.5) 230px
    ),
    repeating-linear-gradient(
      23deg,
      red 50px,
      orange 100px,
      yellow 150px,
      green 200px,
      blue 250px,
      indigo 300px,
      violet 350px,
      red 370px
    );

  & h1,
  h2 {
    color: #ffffff;
    text-shadow: 0 1px 0 #3f2f2f, 0 2px 0 #fc6a09, 0 3px 0 #bbb, 0 4px 0 #201f1f,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(8, 209, 8, 0.3), 0 3px 5px rgba(3, 160, 108, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Empty = styled.p`
  font-weight: bold;
  @-webkit-keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  @keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  color: rgb(245, 245, 245);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  background: radial-gradient(#c801f0, #fdfa4c);
  border-radius: 7px;
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;

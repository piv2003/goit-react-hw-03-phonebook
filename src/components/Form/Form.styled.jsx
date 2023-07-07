import styled from 'styled-components';

export const FormBox = styled.form`
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 75px 75px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 21px, rgba(0, 0, 0, 0.09) 0px -3px 2px;

  & label {
    & span {
      margin-bottom: 15px;
      font-weight: bold;
      color: #8005c7;
    }
  }
`;

export const InputName = styled.input`
  display: block;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 18px;
`;

export const InputTel = styled(InputName)`
  font-style: normal;
`;

export const Button = styled.button`
  color: #ee66d0;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 17px;
  line-height: normal;
  margin: 20px;
  border: 2px solid pink;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;
`;

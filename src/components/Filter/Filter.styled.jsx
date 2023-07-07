import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-right: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #d4f783;
    text-shadow: 3px 5px 2px #474747;
  }
`;

export const InputFilter = styled.input`
  padding: 0 20px;
  background: #f6f6e9;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 75px 75px,
    rgba(0, 0, 0, 0.32) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.37) 0px 12px 21px, rgba(0, 0, 0, 0.09) 0px -3px 2px;
`;

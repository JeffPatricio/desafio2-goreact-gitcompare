import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input{
    flex: 1;
    height: 38px;
    padding: 0 20px;
    background: #FFF;
    border: 0;
    font-size: 16px;
    color: #444;
    border-radius: 3px;
  }

  button{
    height: 38px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63F5B8;
    color: #FFF;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
      background: #52D89F;
    }
  }
`;


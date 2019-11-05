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
    font-size: 16px;
    color: #444;
    border-radius: 5px;
    border: ${props => (props.withError) ? "2px solid #a81515" : 0}
  }

  button{
    width: 80px;
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

export const Error = styled.h4`
  color: #a81515;
  font-weight: bold;
  background: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

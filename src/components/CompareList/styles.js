import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #FFF;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  header{
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 64px;
    }

    strong{
      font-size: 24px;
      margin-top: 10px;
      text-transform: capitalize;
    }

    small{
      font-size: 14px;
      color: #666;
      text-transform: capitalize;
    }
  }

  ul{
    list-style: none;

    li{
      font-weight: bold;
      padding: 12px 20px;

      small{
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n-1){
        background: #F5F5F5;
      }

      &:hover{
         background: #9B65E6;
         cursor: pointer;
         border-left: 1px solid #fff;
         border-right: 1px solid #fff;

          small{
            font-weight: bold;
            color: #000;
          }
      }
    }

  }
`;

export const Delete = styled.button`
  width: 80px;
  height: 25px;
  background: #a81515;
  color: #FFF;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 15px;

  &:hover{
    background: #fc1616;
  }
`;

export const Update = styled.button`
  width: min-content;
  height: min-content;
  background: #FFF;
  border: 0;
  cursor: pointer;
  margin-left: 8px;
  margin-top: 5px;
`;


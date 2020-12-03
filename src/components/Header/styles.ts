import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary_darker};
  position: fixed;
  width: 100vw;
  padding-left: 53.5px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem 2rem;

    > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      opacity: 0.3;

      svg {
        font-size: 1.3rem;
        margin-right: 0.3rem;
      }

      span {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        font-size: 1.4rem;
        margin-right: 0.1rem;
      }

      > div {
        display: flex;
        flex-direction: column;
        text-align: right;
        margin-left: 0.5rem;
        padding-left: 0.8rem;
        margin-right: 0.4rem;
        border-left: 1px solid rgba(255, 255, 255, 0.1);

        > span:nth-child(1) {
          font-size: 0.9rem;
        }

        > span:nth-child(2) {
          font-size: 0.7rem;
          opacity: 0.5;
        }
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    justify-content: space-between;
  }
`;

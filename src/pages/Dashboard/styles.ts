import styled from "styled-components";

export const Container = styled.div`
  #content {
    margin-top: 90px;
    margin-left: 53px;
    padding: 1rem;
    transition: all 0.3s;

    p,
    span {
      color: ${(props) => props.theme.colors.background_text};
      transition: all 0.3s;
    }
  }

  @media (max-width: 768px) {
    #content {
      margin-left: 0;
    }
  }
`;

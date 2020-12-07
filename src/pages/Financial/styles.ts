import styled from "styled-components";

export const Container = styled.div`
  #content {
    margin-top: 90px;
    margin-left: 53px;
    padding: 1rem;

    p,
    span {
      color: ${(props) => props.theme.colors.background_text};
    }
  }

  @media (max-width: 767px) {
    #content {
      margin-left: 0;
    }
  }
`;

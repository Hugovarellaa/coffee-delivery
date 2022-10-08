import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  font-weight: 700;
  line-height: 1.3rem;
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`
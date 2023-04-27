import styled from "styled-components";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const Container = styled.header`
  width: 100vw;
  height: 40px;

  background-color: ${props => props.theme.bg};
`;

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    signOut();
    navigate('/', { replace: true });
  }, [signOut, navigate])

  return (
    <Container>
      <button onClick={handleSignOut}>Sair</button>
    </Container>
  )
}

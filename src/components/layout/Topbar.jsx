import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSun} from "react-icons/fi";

/* ================= Styles ================= */

const SafeSticky = styled(Navbar)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: saturate(180%) blur(14px);
  padding-top: max(env(safe-area-inset-top), 6px);
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;


const Bar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Center = styled.div`
  justify-self: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const IconBtn = styled.button`
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  transition: transform 120ms ease, background 120ms ease;
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Logo = styled(Link)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  font-size: 28px;
  font-family: "Cookie", cursive;
  color: #262626;
  letter-spacing: 0.2px;
  line-height: 1;
`;

/* ================= Component ================= */

export default function Topbar() {
  const ThemeIcon = FiSun ;

  const handleToggle = () => {
    console.log("Toggled theme to");
  };

  return (
    <div className="topbar-wrapper">
      {/* Mobile-only top bar */}
      <SafeSticky bg="white" className="shadow-sm d-lg-none">
        <Container fluid className="px-3">
          <Bar>
            <Left>
              <Logo to="/instabooks/" aria-label="Go to home">
                <LogoText>InstaBooks</LogoText>
              </Logo>
            </Left>

            <Center />

            <Right>
              <IconBtn
                type="button"
                onClick={handleToggle}
              >
                <ThemeIcon size={20} />
              </IconBtn>
            </Right>
          </Bar>
        </Container>
      </SafeSticky>
    </div>
  );
}

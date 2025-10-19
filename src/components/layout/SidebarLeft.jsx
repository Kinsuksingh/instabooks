import { FiHome, FiSearch, FiPlusSquare, FiBookOpen, FiUser, FiMenu, FiHeart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 245px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #dbdbdb;
  padding: 8px 0 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 200ms ease, padding 200ms ease;
`;

const Logo = styled(Link)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;

  
`;

const LogoText = styled.div`
  font-size: 28px;
  font-family: 'Cookie', cursive;
  color: #262626;
  padding-left: 12px;
  transition: opacity 150ms ease;
`;



const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 12px;
  margin: 4px 0;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  color: #262626;
  background: transparent;
  transition: background-color 150ms ease, padding 200ms ease, gap 200ms ease;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }

  svg {
    font-size: 26px;
    stroke-width: ${(props) => (props.$active ? "2.5" : "2")};
    min-width: 26px;
    margin-left: 12px;
    flex-shrink: 0;
  }
`;

const BottomSection = styled.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;

`;

const NotificationBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 32px;
  width: 8px;
  height: 8px;
  background: #ff3040;
  border-radius: 50%;
  border: 2px solid #ffffff;
`;

export default function InstagramSidebar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", icon: <FiHome />, label: "Home" },
    { to: "/search", icon: <FiSearch />, label: "Search" },
    { to: "/explore", icon: <FiPlusSquare />, label: "Explore" },
    { to: "/messages", icon: <FiBookOpen />, label: "Messages", hasNotification: true },
    { to: "/notifications", icon: <FiHeart />, label: "Notifications" },
    { to: "/create", icon: <FiPlusSquare />, label: "Create" },
    { to: "/profile", icon: <FiUser />, label: "Profile" },
  ];

  return (
    <SidebarContainer>
      <Logo to="/">
        <LogoText>InstaBooks</LogoText>
      </Logo>

      <NavLinks>
        {links.slice(0, -1).map((link) => (
          <NavLink key={link.to} to={link.to} $active={pathname === link.to}>
            <IconWrapper>{link.icon}</IconWrapper>
            <LabelText>{link.label}</LabelText>
            {link.hasNotification && <NotificationBadge />}
          </NavLink>
        ))}

        <NavLink
          to={links[links.length - 1].to}
          $active={pathname === links[links.length - 1].to}
        >
          <IconWrapper>{links[links.length - 1].icon}</IconWrapper>
          <LabelText>{links[links.length - 1].label}</LabelText>
        </NavLink>
      </NavLinks>

      <BottomSection>
        <NavLink to="/more">
          <IconWrapper>
            <FiMenu />
          </IconWrapper>
          <LabelText>More</LabelText>
        </NavLink>
      </BottomSection>
    </SidebarContainer>
  );
}

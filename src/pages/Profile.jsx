import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUserTie, FaUserGraduate, FaChalkboardTeacher, FaChevronDown } from 'react-icons/fa';

// Animations
const float = keyframes`
  0%, 100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(30px,-30px) scale(1.1); }
  66% { transform: translate(-20px,20px) scale(0.9); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const progress = keyframes`
  0% { width:0%; }
  50% { width:70%; }
  100% { width:0%; }
`;

// Styled components
const Wrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  background: linear-gradient(135deg,#667eea 0%,#764ba2 100%);
  min-height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  position:relative;
`;

const BackgroundAnimation = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  overflow:hidden;
`;

const Circle = styled.div`
  position:absolute;
  border-radius:50%;
  background: rgba(255,255,255,0.1);
  animation: ${float} 20s infinite ease-in-out;
  &:nth-child(1) { width:300px;height:300px;top:10%;left:10%; animation-delay:0s; }
  &:nth-child(2) { width:200px;height:200px;top:60%;right:15%; animation-delay:3s; }
  &:nth-child(3) { width:150px;height:150px;bottom:20%;left:20%; animation-delay:6s; }
`;

const Container = styled.div`
  position:relative;
  z-index:1;
  text-align:center;
  padding:40px;
  background: rgba(255,255,255,0.95);
  border-radius:10px;
  box-shadow:0 20px 60px rgba(0,0,0,0.3);
  max-width:500px;
  animation: ${slideUp} 0.8s ease-out;

  @media(max-width:600px){ margin:20px; padding:20px; }
`;

const IconContainer = styled.div` margin-bottom:20px; `;
const ConstructionIcon = styled.div`
  font-size:70px;
  border-radius:50%;
  width:100px;height:100px;
  margin:0 auto;
  background: linear-gradient(135deg,#667eea,#764ba2);
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  font-weight:bold;
  animation: ${bounce} 2s infinite;
`;

const Title = styled.h1`
  font-size:2.5em;
  color:#2d3748;
  margin-bottom:10px;
  font-weight:700;
  @media(max-width:600px){ font-size:2em; }
`;

const Subtitle = styled.p`
  font-size:1.2em;
  color:#718096;
  margin-bottom:25px;
  line-height:1.6;
`;

const ProgressContainer = styled.div`
  width:100%;
  height:8px;
  background:#e2e8f0;
  border-radius:10px;
  overflow:hidden;
  margin-bottom:20px;
`;

const ProgressBar = styled.div`
  height:100%;
  background:linear-gradient(90deg,#667eea 0%,#764ba2 100%);
  border-radius:10px;
  animation: ${progress} 3s ease-in-out infinite;
`;

// Custom dropdown styles
const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
`;

const DropdownHeader = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);

  &:hover { border-color: #667eea; }
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  max-height: 200px;
  overflow-y: auto;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  display:flex;
  align-items:center;
  gap: 10px;
  cursor:pointer;
  transition: background 0.2s;

  &:hover { background: #f0f4ff; }
`;

const NotifyButton = styled.button`
  margin-top:10px;
  padding:15px 40px;
  font-size:16px;
  font-weight:600;
  color:white;
  background: linear-gradient(135deg,#667eea 0%,#764ba2 100%);
  border:none;
  border-radius:50px;
  cursor:pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 15px rgba(102,126,234,0.4);

  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(102,126,234,0.6); }
  &:active { transform: translateY(0); }
  &:disabled { opacity:0.6; cursor:not-allowed; }
`;

export default function ComingSoon() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { name: "Prof. Michael Chen", icon: <FaUserTie /> },
    { name: "Dr. Sarah Johnson", icon: <FaUserGraduate /> },
    { name: "Mr. David Kumar", icon: <FaChalkboardTeacher /> },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setIsOpen(false);
  };

  const goToLibrary = () => {
    if (selectedTeacher) {
      navigate('/instabooks/library');
    }
  };

  return (
    <Wrapper>
      <BackgroundAnimation>
        <Circle />
        <Circle />
        <Circle />
      </BackgroundAnimation>

      <Container>
        <IconContainer>
          <ConstructionIcon>🎓</ConstructionIcon>
        </IconContainer>

        <Title>Choose Your Favorite Teacher</Title>
        <Subtitle>Select a teacher to access their complete library</Subtitle>

        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>

        {/* Enhanced Dropdown */}
        <DropdownContainer>
          <DropdownHeader onClick={toggleDropdown}>
            {selectedTeacher ? (
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                {selectedTeacher.icon} {selectedTeacher.name}
              </div>
            ) : "Select Teacher"}
            <FaChevronDown />
          </DropdownHeader>
          {isOpen && (
            <DropdownList>
              {teachers.map((teacher, index) => (
                <DropdownItem key={index} onClick={() => selectTeacher(teacher)}>
                  {teacher.icon} {teacher.name}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>

        <NotifyButton onClick={goToLibrary} disabled={!selectedTeacher}>
          Go to Library
        </NotifyButton>
      </Container>
    </Wrapper>
  );
}








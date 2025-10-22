import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BookOpen, Award, Star, TrendingUp, Target, Zap } from 'lucide-react';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: radial-gradient(
      40% 60% at 20% 10%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      40% 60% at 80% 0%,
      rgba(56, 189, 248, 0.18) 0%,
      transparent 60%
    ),
    #f8fafc;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const TimelineContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const SnakePath = styled.svg`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

const TimelineWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const TimelineRow = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : 'center'};
  margin-bottom: ${props => props.spacing || '8rem'};
  position: relative;
`;

const TimelineCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }

  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -70px;' : 'left: -70px;'}
    transform: translateY(-50%);
    border: 4px solid white;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    
    &::before {
      left: 50%;
      right: auto;
      top: -30px;
      transform: translateX(-50%);
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;
`;

const CardDate = styled.div`
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
`;

const Badge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 1rem;
`;

function SnakeTimeline() {
  const timelineData = [
    {
      id: 1,
      title: 'Started Learning Journey',
      date: 'January 2024',
      description: 'Enrolled in Grade 10 and began exploring various subjects with detailed notes and revision materials.',
      icon: BookOpen,
      align: 'left',
      badge: 'New Beginning'
    },
    {
      id: 2,
      title: 'First Achievement',
      date: 'March 2024',
      description: 'Completed 5 courses and scored 95% average across all subjects. Mastered Algebra Fundamentals.',
      icon: Award,
      align: 'right',
      badge: '95% Score'
    },
    {
      id: 3,
      title: 'Became Top Student',
      date: 'May 2024',
      description: 'Ranked #1 in the class with consistent performance and dedication to learning.',
      icon: Star,
      align: 'left',
      badge: 'Rank #1'
    },
    {
      id: 4,
      title: 'Rapid Progress',
      date: 'July 2024',
      description: 'Completed 10 advanced modules in record time. Started helping other students with their studies.',
      icon: TrendingUp,
      align: 'right',
      badge: 'Fast Learner'
    },
    {
      id: 5,
      title: 'Set New Goals',
      date: 'September 2024',
      description: 'Defined clear objectives for board exams. Started intensive preparation with targeted revision notes.',
      icon: Target,
      align: 'left',
      badge: 'Goal Oriented'
    },
    {
      id: 6,
      title: 'Excellence Achieved',
      date: 'October 2024',
      description: 'Consistently scoring above 98% in all tests. Ready for final board examinations.',
      icon: Zap,
      align: 'right',
      badge: 'Excellence'
    }
  ];

  return (
    <Container>
      <Title>Your Learning Timeline</Title>
      <Subtitle>Track your amazing progress and achievements</Subtitle>

      <TimelineContainer>
        <SnakePath viewBox="0 0 1400 1400" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 200 100 Q 400 100 500 200 T 700 300 Q 900 300 1000 400 T 1200 500 Q 1000 500 900 600 T 700 700 Q 500 700 400 800 T 200 900"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="10 5"
          />
        </SnakePath>

        <TimelineWrapper>
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <TimelineRow key={item.id} align={item.align} spacing={index === timelineData.length - 1 ? '0' : '8rem'}>
                <TimelineCard position={item.align} delay={`${index * 0.2}s`}>
                  <IconWrapper>
                    <Icon size={28} />
                  </IconWrapper>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDate>{item.date}</CardDate>
                  <CardDescription>{item.description}</CardDescription>
                  <Badge>{item.badge}</Badge>
                </TimelineCard>
              </TimelineRow>
            );
          })}
        </TimelineWrapper>
      </TimelineContainer>
    </Container>
  );
}

export default SnakeTimeline;
import styled from 'styled-components';
import { MoreHorizontal } from 'lucide-react';

const SidebarContainer = styled.aside`
  width: 320px;
  padding: 24px 0;
  position: sticky;
  top: 20px;
  transition: width 200ms ease, padding 200ms ease;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  margin-bottom: 24px;
  transition: padding 200ms ease, gap 200ms ease;
`;

const ProfileAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  cursor: pointer;
  flex-shrink: 0; /* keep crisp */
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileUsername = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const ProfileName = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  margin-top: 2px;
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #0095f6;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #00376b;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 12px;
  transition: padding 200ms ease, margin 200ms ease;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #8e8e8e;
`;

const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: #262626;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #8e8e8e;
  }

`;

const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: gap 200ms ease;

`;

const SuggestionCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: padding 200ms ease, gap 200ms ease, background-color 150ms ease;

  &:hover {
    background: #fafafa;
  }
`;

const SuggestionAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0; /* keep crisp */
`;

const SuggestionInfo = styled.div`
  flex: 1;
  cursor: pointer;

  
`;

const SuggestionUsername = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
`;

const SuggestionSubtext = styled.div`
  font-size: 12px;
  color: #8e8e8e;
`;

const FollowButton = styled.button`
  background: none;
  border: none;
  color: #0095f6;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #00376b;
  }
`;




const suggestions = [
  { username: 'natgeo', subtext: 'Followed by alex + 12 more', seed: 'natgeo' },
  { username: 'nasa', subtext: 'Followed by sarah + 8 more', seed: 'nasa' },
  { username: 'bbcearth', subtext: 'Followed by mike + 5 more', seed: 'bbcearth' },
  { username: 'photography', subtext: 'Followed by emma + 15 more', seed: 'photography' },
  { username: 'books', subtext: 'Followed by james + 20 more', seed: 'books' },
];

export default function InstagramSidebar() {
  return (
    <SidebarContainer>
      <ProfileSection>
        <ProfileAvatar
          src="https://api.dicebear.com/9.x/initials/svg?seed=YourProfile"
          alt="Your profile"
        />
        <ProfileInfo>
          <ProfileUsername>your_username</ProfileUsername>
          <ProfileName>Your Full Name</ProfileName>
        </ProfileInfo>
        <SwitchButton>Switch</SwitchButton>
      </ProfileSection>

      <SectionHeader>
        <SectionTitle>Suggestions For You</SectionTitle>
        <SeeAllButton>See All</SeeAllButton>
      </SectionHeader>

      <SuggestionsList>
        {suggestions.map((user) => (
          <SuggestionCard key={user.username}>
            <SuggestionAvatar
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.seed}`}
              alt={user.username}
            />
            <SuggestionInfo>
              <SuggestionUsername>{user.username}</SuggestionUsername>
              <SuggestionSubtext>{user.subtext}</SuggestionSubtext>
            </SuggestionInfo>
            <FollowButton>Follow</FollowButton>
          </SuggestionCard>
        ))}
      </SuggestionsList>
    </SidebarContainer>
  );
}

import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';

const HomeScreen = () => {
  return (
    <Container>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-2.png')} />
          <UserInfoText>
            <UserName>Jadon Sancho</UserName>
            <PostTime>4 hours ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Hello this is looking great</PostText>
        <PostImg source={require('../assets/posts/post-1.jpg')} />
        <InteractionWrapper>
          <Interaction active>
            <Ionicons name="heart" size={25} color="#2e64e5" />
            <InteractionText active>7 Likes</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-2.png')} />
          <UserInfoText>
            <UserName>Jadon Sancho</UserName>
            <PostTime>4 hours ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Hello this is looking great</PostText>
        <Divider />
        {/* <PostImg source={require('../assets/posts/post-1.jpg')} /> */}
        <InteractionWrapper>
          <Interaction>
            <Ionicons name="heart-outline" size={25} />
            <InteractionText>Like</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
    </Container>
  );
};

export default HomeScreen;

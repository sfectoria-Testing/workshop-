import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles.js';

const Messages = [
  {
    id: '1',
    userName: 'Leith ayadi',
    userImg: require('../assets/users/user-1.png'),
    messageTime: '4 mins ago',
    messageText:
      'ti chbeha dekhla b3athha el khedma',
  },
  {
    id: '2',
    userName: 'Aziz Arfaoui',
    userImg: require('../assets/users/user-2.png'),
    messageTime: '2 hours ago',
    messageText:
      'yaaaaaaaa dhiaaaaaaa shary screeen ya dhiiiiiia',
  },
  {
    id: '3',
    userName: 'Balkis Bey',
    userImg: require('../assets/users/user-3.png'),
    messageTime: '1 hours ago',
    messageText:
      'ghanilna dhia',
  },
  {
    id: '4',
    userName: 'Mouhib daily',
    userImg: require('../assets/users/user-4.png'),
    messageTime: '1 day ago',
    messageText:
      'dhia bara emchy ******',
  },
  {
    id: '5',
    userName: 'Firas Bhb',
    userImg: require('../assets/users/user-6.jpeg'),
    messageTime: '2 days ago',
    messageText:
      'tii akahaw 3aad',
  },
];

const Chatrooms = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Messages', {user: {
                name:item.userName,
                message:item.messageText,
                img : item.userImg
            }})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default Chatrooms;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
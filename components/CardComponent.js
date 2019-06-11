import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardComponent extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thubnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} />
                        <Body>
                            <Text>Anpigon</Text>
                            <Text note>Jan 21, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image 
                        source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                        style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Buton transparent>
                            <Icon name='ios-heart' style={{ color: 'black' }}/>
                        </Buton>
                        <Buton transparent>
                            <Icon name='ios-chatbubboes' style={{ color: 'black' }} />
                        </Buton>
                        <Buton transparent>
                            <Icon name='ios-send' style={{ color: 'black' }} />
                        </Buton>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>101 likes</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{ fontWeight: '900' }}>Anpigon</Text>
                            이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다.
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    }
});
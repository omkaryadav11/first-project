import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
 import styled from 'styled-components/native';
 import axios from 'axios';
import { getPathFromState } from '@react-navigation/native';
 
export const Container = styled.View`
  flex:1;
    padding:50px 0;
    justify-content:center;
    background-color:#f4f4f4;
    align-items:center
`
const Title=styled.Text`
font-size:20px;
text-align:center;
 color:red;
`
const Item=styled.View`
flex:1;
border:1px solid #ccc;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
width:80%;
padding:10px;
 

`;




    


export default class UserInfo extends Component {

    
    
    render() {
     
        return (
          <Container>
              <Item>
                  <Image   style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      marginRight: 5,
                    }}>
                      
                    </Image>
              </Item>
          </Container>
        );
    }
}


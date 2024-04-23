import React, {useEffect, useState} from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, ScrollView, Button } from 'react-native';
import { color } from '@rneui/base';

const GetCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () =>{ 
        fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
        .then(response=>response.json())
        .then(data=>{
            setCharacters(data)
        })
        .catch(e=>{
            console.log(e)
        })
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
            <ScrollView >
            {loading ? (
                <ActivityIndicator />
            ) : (
                characters.map((character) => {
                    return(
                            <>
                            <View style = {{
                                backgroundColor: '#C0C0C0',
                                margin: 25,
                            }}>
                            <Card.Title> {character.name} </Card.Title>
                            <Card.Divider/>
                            <Text> {character.description} </Text>
                            <Text style = {{color: 'red'}}>Rareté: {character.rarity}/5 </Text>
                            </View>
                            
                            </>
                    )
                })
            )}
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title : {
      color: 'white',
      fontSize: 50,
    },
    tabStyle: {
      backgroundColor: 'black',
      fontSize: 50
    }
  });

export default GetCharacters;
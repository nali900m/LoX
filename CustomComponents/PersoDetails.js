import React, {useEffect, useState} from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, ScrollView, Button } from 'react-native';

const GetChar = () => {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () =>{ 
        fetch('http://api-fantasygame.eu-4.evennode.com/get-character/'+1)
        .then(response=>response.json())
        .then(data=>{
            setCharacter(data)
        })
        .catch(e=>{
            console.log(e)
        })
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
            <View style={{
            
            }}>
            {loading ? (
                <ActivityIndicator />
            ) : (

                            <>
                            <Card.Title> {character.name} </Card.Title>
                            <Card.Divider/>
                            <View style={{
                                
                            }}>
                            <Image
                            style={{width:200,height:150}}
                            resizeMode="contain"
                            source={{ uri: character.img }}
                            />
                            <Text>Rareté : {character.rarity}</Text>
                            <Text>Description : {character.description}</Text>
                            <Text>Point de vie : {character.hp}</Text>
                            <Text>Point d'attaque : {character.attack_points}</Text>
                            <Text>Spell : {character.main_attack}</Text>
                            </View>                      
                            </>
            )}
            </View>
    );
}


export default GetChar;
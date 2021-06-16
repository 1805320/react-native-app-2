import React, {useState} from "react";
import { TextInput, Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { getSearchResult } from "../api/searchApi";


const styles = StyleSheet.create({
    buttonOutline:{
        backgroundColor:"#B2BEB5",
        height: 50,
        margin: 15,
        padding: 5,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    textInput:{
        height:30,
        fontSize:15,
        marginHorizontal:5,
        flex: 1,
    },

    imageView:{
        flexDirection: "column",
        alignItems: "center",
    }
})


const HomeScreen = () => {

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    const callSearchApi = () =>{
        getSearchResult(term)
            .then((response)=>{
                setResults(response.data.results);
            }).catch((errors)=>{
                console.log(errors);
            })
    }

    return(
        <View>
            {/* search bar */}
            <View style={styles.buttonOutline}>
                <Ionicons 
                    name="search-outline" 
                    size={30} 
                    color="black" 
                    style={styles.iconStyle}/>

                <TextInput 
                    placeholder="Search" 
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={term}
                    onChangeText={(newval)=>{setTerm(newval)}}
                    onEndEditing={callSearchApi}/>
            </View>

            <ScrollView>
                <View style={styles.imageView}>
                    {results.map((val,index)=>{
                        return <Image key = {index} style={{width: 200, height: 200, margin: 10, padding: 20}} source={{uri : val.urls.small}}/>
                    })}
                </View>
            </ScrollView>

        </View>
    )
}

export default HomeScreen;
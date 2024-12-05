import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Icons } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png'}} style={styles.img} resizeMode='contain'/>
            <View style={styles.subCont}>
                <TouchableOpacity onPress={() => navigation.navigate('down')}>
                    <Octicons
                        style={{paddingRight : 30 , paddingTop: 10}}
                        name="download"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchView} onPress={() => navigation.navigate('search')}>
                    <Image source={Icons.search} style={styles.search} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 45,
        paddingBottom: 20,
        paddingHorizontal: 10,
        backgroundColor:"rgba(255,255,255,0.12)",
        position: 'absolute',
        width: '100%'
    },
    searchView: {
       
        // backgroundColor: 'red'
        paddingRight: 10,
        paddingTop: 10
      },
      search: {
        height: 30,
        width: 30,
        tintColor: 'white'
      },
      subCont : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',

      },
      img:{
        height: 30,
        width: 30,
        paddingLeft: 10
      }
})
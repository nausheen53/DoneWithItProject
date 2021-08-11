import React from 'react';
import { View,StyleSheet, Platform, StatusBar } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { useNetInfo } from '@react-native-community/netinfo';

function OfflineNotice(props) {
   const netInfo= useNetInfo();
   {if(netInfo.isInternetReachable===false && netInfo.type!=='unknown')
        return (

        <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
 container:
   {
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    elevation:1,
    width:"100%",
    height:50,
    position:'absolute',
    top:StatusBar.height,
  },
  text:
  {
    color:"white",
  }
});

export default OfflineNotice;
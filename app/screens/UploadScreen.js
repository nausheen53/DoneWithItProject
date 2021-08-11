import React from 'react';
import { View,StyleSheet, Modal } from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import AppText from '../components/AppText';
import LottieView from 'lottie-react-native';

function UploadScreen({onDone,progress=0,visible=false}) {
 return (
     <Modal visible={visible}>
         <View style={styles.container}>
           {
             progress<1? <ProgressBar styleAttr="Horizontal" progress={progress} indeterminate={true} color="tomato"></ProgressBar>
                :<LottieView
                source={require('../assets/animations/Done.json')}
                autoPlay
                loop={false}
                onAnimationFinish={onDone}
                style={{width:100}}
                /> 
           }
              
         </View>
     </Modal>
  );
}

const styles = StyleSheet.create({
 container:
   {
    justifyContent:'center',
    alignContent:"center",
    alignSelf:'center',
    flex:1,
  }
});

export default UploadScreen;
import React,{useRef} from 'react';
import { View,StyleSheet,ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris=[],onDeleteImage,onAddImage}) {
    const scrollView = useRef(); //reference object
 return (
// using ref hook, image input will automatically scroll to end..... link useref prop to scroll view
//need to wrap scroll inside a view, since scrollView take whole available space..so it willpush other element out..
//so wrapping inside view , view takes the size of its child component
    <View>
    <ScrollView horizontal={true} ref={scrollView} onContentSizeChange={()=>scrollView.current.scrollToEnd()} >
     <View style={styles.container}>
         {
             imageUris.map(uri=>(
                 <View style={styles.imageinput} key={uri} >
                <ImageInput
                imageUri={uri}
                onChangeImage={()=>onDeleteImage(uri)}
                />
                </View>
             ))
         }
         <ImageInput onChangeImage={uri=>onAddImage(uri)}  />
   </View>
   </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
 container:
   {
        flexDirection:"row",
        marginTop:10,
  },
  imageinput:
  {
    // marginLeft:10,
    marginRight:5,
  }
});

export default ImageInputList;
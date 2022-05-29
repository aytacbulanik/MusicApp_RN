import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : 'lightgray',
        flexDirection: 'row',
        borderWidth: 1,
    },
    textContainer: {

    },
    image : {
        width: Dimensions.get('screen').width /4,
        height:100,
        borderRadius: 50,
    },

})
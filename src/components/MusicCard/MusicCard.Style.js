import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : 'lightgray',
        flexDirection: 'row',
    },
    textContainer: {
        flex:1,
        margin: 3,
        padding: 2,
        borderWidth: 1,
    },
    topTextView: {
        flex: 2,
        flexDirection: 'row',
    },
    topText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    bottomTextView : {
        flex:2,
        flexDirection: 'row',
    },
    image : {
        width: Dimensions.get('screen').width /4,
        height:100,
        borderRadius: 50,
        margin: 3,
    },

})
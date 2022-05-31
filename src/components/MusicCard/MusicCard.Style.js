import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
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
        alignItems: 'center',
    },
    topText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    artistText: {
       
        color: 'lightgray',
    },
    bottomTextView : {
        flex:2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomLeftView: {
        flexDirection: 'row',
    },
    bottomRightView: {

    },
    tukendi: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'red',
    },
    image : {
        width: Dimensions.get('screen').width /4,
        height:100,
        borderRadius: 50,
        margin: 3,
    },

})
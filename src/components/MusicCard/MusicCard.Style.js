import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {
        padding: 10,
        flexDirection: 'row',
    },
    inner_container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    title: {
fontSize: 25,
fontWeight: 'bold',
    },
    infoContainer: {
        flexDirection: 'row',
    },
    year: {
        marginLeft: 5,
        fontWeight: 'bold',
    },
    soldOut_container: {

    },
    soldText : {

    },
    image : {
        width: 100,
        height:100,
        borderRadius: 50,
        margin: 3,
    },

})
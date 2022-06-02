import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {
        padding: 10,
        flexDirection: 'row',
    },
    inner_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
fontSize: 25,
fontWeight: 'bold',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
    },
    infoContent: {
        flexDirection: 'row',
    },
    year: {
        marginLeft: 5,
        fontWeight: 'bold',
    },
    soldOut_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    soldText : {
        color: 'red',
    },
    image : {
        width: 100,
        height:100,
        borderRadius: 50,
        margin: 3,
    },
    artistText: {
        color: 'lightgray',
    },

})
import { StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({
    frame:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f2f5f4'
    } ,
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width:1 , height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginHorizontal: 4,
        marginVertical:6,
    },
    entry:{
        borderWidth: 1,
        borderColor: 'coral',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        backgroundColor: '#fff',
        width: 300,
        marginVertical: 5,
    },
    button:{
        marginVertical: 5,
        padding: 10,
        width: 320,
        fontSize: 18
    },
    headerText:{
        fontSize: 25,
        color: '#494e4f',
        fontWeight: 'bold'
    },
    text:{
        fontSize:18,
        fontWeight: 'bold',
        alignSelf:'flex-start',
        marginHorizontal: 5
    },
    header:{
        margin: 10,
        padding: 5,
        textAlignVertical: "center",
    },
    textClick:{
        color: 'coral',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf:'flex-end'
    }
});
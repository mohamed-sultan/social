import {Text,StyleSheet} from 'react-native'
import {memo} from 'react'
interface ItextTitle {
    title?:string
}
const TextTitle = ({title=''}:ItextTitle)=>{
    return <Text style={styles.text} >
        {title}
    </Text>
}
export default memo(TextTitle)
const styles = StyleSheet.create({
    text:{
        color: '#141619',
        fontWeight: '700',
        textAlign: 'left',
        marginHorizontal:5,
        marginTop:10
    }
});
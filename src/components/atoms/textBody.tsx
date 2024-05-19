import {Text,StyleSheet} from 'react-native'
import {memo} from 'react'

interface ItextBody {
    message?:string
}
const TextBody = ({message=''}:ItextBody)=>{
    return (
        <Text style={style.text} >
          {message}
        </Text>
    )
}
const style = StyleSheet.create({
    text:{
        color: '#141619',
        textAlign: 'left',
        paddingHorizontal: 30,
        lineHeight: 28,
        marginVertical: 20
    }
})
export default  memo(TextBody)
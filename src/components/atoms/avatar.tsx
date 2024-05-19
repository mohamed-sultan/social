import {Image} from 'react-native'
import {memo} from 'react'

interface Iavatar {
    uri:string;
    width?:number;
    height?:number;
    borderRadius?:number
}
const Avatar = ({uri='',width=60,height=60,borderRadius=30}:Iavatar)=>{
    return   <Image source={{ uri }}
    style={{
        width,
        height,
        borderRadius
    }}
/>
}
export default memo(Avatar)
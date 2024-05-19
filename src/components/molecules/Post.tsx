
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    Pressable,
    StyleSheet
} from 'react-native';
import {memo} from 'react'
import {Avatar,TextBody,TextTitle} from '@atoms'

const Post = ({ item, index }: any) => {
    const navigation = useNavigation()
    return (
        <Pressable
        onPress={()=>navigation.navigate('details',{item:item})}
        style={styles.wrapper} >
            <View style={styles.head} >
               
                <Avatar uri={ `https:randomuser.me/api/portraits/med/${index % 2 == 0 ? 'women' : 'men'}/${index + 5}.jpg` } />
                 <View style={{ alignItems: 'flex-start' }} >
                    <TextTitle title={`@${item?.user_id}`}  />
                </View>
               </View>
            <Text style={styles.title} >
                {item?.title}
            </Text>
        
            <TextBody message=  {item?.body} />
        </Pressable>
    );
};
export default memo(Post) 
const styles = StyleSheet.create({
    wrapper:{
        marginBottom: 10,
    },
    head:{
        flexDirection: 'row',

        alignItems: 'center',
        paddingHorizontal:10
    },
    title:{
        textAlign: 'left',
        paddingHorizontal: 30,
        marginTop: 15,
    }
});
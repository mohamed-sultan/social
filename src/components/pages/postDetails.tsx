import {View,SafeAreaView,FlatList,StyleSheet} from 'react-native'
import {Post,Comment} from '@molecules'
import {usePosts} from '@services'

const PostDetails = ({route})=>{
    const { item } = route.params;
    const {commentsQuery}=usePosts()
    const {data}=commentsQuery(item?.id)


    return (
           <SafeAreaView>
             <View style={{paddingTop:30}} > 
              <Post index={10} item={item} />
             <View style={styles.listWrapper} >
             <FlatList
              data={data}
              keyExtractor={(item,i)=>String(i)}
              renderItem={({item,index})=><Comment 
              avatar={`https://randomuser.me/api/portraits/thumb/men/${index+10}.jpg`}
              message={item?.body}
              name={item?.name} 
              />} 
            
              />
             </View>
            </View>
           </SafeAreaView>
        )
}
export default PostDetails
const styles = StyleSheet.create({
    listWrapper:{
        paddingHorizontal:10
    }
});

import {
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
import {Post} from '@molecules'
import {usePosts} from '@services'

 

export default function App() {
    const {postsQuery}=usePosts()
    
    const {data}=postsQuery()
    return (
        <SafeAreaView style={styles.container}>
 
        
            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index, separators }) => <Post key={item?.id} index={index} item={item} />}
            />
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});



import {
    StyleSheet,
    View,
} from 'react-native';
import { Avatar, TextBody, TextTitle } from '@atoms'
import { memo } from 'react'

interface Icomment {
    avatar: string;
    message: string;
    name: string
}

const comment = ({
    avatar = "",
    message = '',
    name = ''
}: Icomment) => {
    return (
        <View
            style={styles.wrapper} >
            <View style={styles.headSection} >
                <Avatar width={40} height={40} borderRadius={20} uri={avatar} />
                <View style={{ alignItems: 'flex-start' }} >
                    <TextTitle title={`@ ${name}`} />
                </View>
            </View>
         <TextBody message={message} />
        </View>
    );
};

export default memo(comment)
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
        paddingHorizontal:10
    },
    headSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    }
});
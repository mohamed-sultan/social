
import { Fetch } from './useApi';
import { useQuery } from 'react-query';
import {
    postsUrl,
} from './constants'
const usePosts = () => {
    const postApi = async () => {
        const result = await Fetch({ url: postsUrl, method: 'GET' });
        return result
    }
    const commentsAPi = async (postid='') => {
        const result = await Fetch({ url: postsUrl+`/${postid}/comments`, method: 'GET' });
        return result
    } 



    const commentsQuery = (id: string) =>
    useQuery({
      enabled: Boolean(id),
      queryKey: [postsUrl, id],
      queryFn: ({ queryKey }) => commentsAPi(queryKey[1]),
    });

    const postsQuery = () => useQuery({ queryKey: [postsUrl], queryFn: postApi });



    return {
        postsQuery,
        commentsQuery,
    };
};

export { usePosts };
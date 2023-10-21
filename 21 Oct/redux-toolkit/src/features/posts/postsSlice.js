import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";



const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading | 'succeeded' | 'failed'
    error: null
}
//createAsyncThunk =>  u can use it to create asynchronous actions, async action creator. returns a thunk function that we can use in dispatch like a regular redux
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async function () {
    const response = await axios.get(POSTS_URL);
    console.log('fetchPosts', response)
    return response.data;
});


export const addNewPost = createAsyncThunk('posts/addNewPost', async function (initialPost) {
    const response = await axios.post(POSTS_URL, initialPost);
    console.log('addNewPost', { response, initialPost })

    return response.data
})


export const updatePost = createAsyncThunk('posts/addNewPost', async function (initialPost) {

})


export const deletePost = createAsyncThunk('posts/addNewPost', async function (initialPost) {

})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                //so it's also safe to "mutate" state due to immer library
                state.push(action.payload);
                console.log('state', { state, action })

            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }

        },
        reactionAdded(state, action) {

            console.log('reactionAdded', action)

            const { postId, reaction } = action.payload;

            const existingPost = state.find(post => post.id == postId);

            if (existingPost) {
                existingPost.reactions[reaction]++;
            }


        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log('fulfilled', action)
                state.status = 'succeeded';
                //Add data and reactions
                let min = 1;

                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    };
                    return post;
                })


                //add the fetched posts to the state
                state.posts = state.posts.concat(loadedPosts);

            })
            .addCase(fetchPosts.rejected, (state, action) => {
                console.log('rejected', action)

                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action) => {

                action.payload.userId = Number(action.payload.userId);
                action.payload.date = new Date().toISOString();
                action.payload.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                };

                console.log(action.payload);
                state.posts.push(action.payload);
            })
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;



export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
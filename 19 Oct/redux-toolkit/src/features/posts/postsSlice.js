import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [

    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'I have learnt really cool things.',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Fun',
        content: 'I really like pizza.',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },

]

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
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU"
                message="This is a post"
                timestamp="timestamp"
                username="joaq"
                image="https://gowtham-star.github.io/logo25.png"
            />

            <Post
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU"
                message="This is a post"
                timestamp="timestamp"
                username="joaq"
                image="https://gowtham-star.github.io/logo25.png"
            />
            <Post
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU"
                message="This is a post"
                timestamp="timestamp"
                username="joaq"
                image="https://gowtham-star.github.io/logo25.png"
            />
            {/*story reel*/}
            {/*  messageSender */}
        </div>
    )
}

export default Feed

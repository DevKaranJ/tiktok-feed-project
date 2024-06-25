import React from 'react';
import './Feed.css';
import video1 from './videos/video1.mp4'; 
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';

const Feed = () => {
  const tiktokFeed = [
    { id: 1, username: 'user1', video: video1, caption: 'First video!' },
    { id: 2, username: 'user2', video: video2, caption: 'Second video!' },
    { id: 3, username: 'user1', video: video3, caption: 'Third video!' },
  ];

  return (
    <div>
      <h2 className="feed-title">TikTok Feed</h2>
      <div className="feed">
        {tiktokFeed.map((post) => (
          <div key={post.id} className="post">
            <video src={post.video} controls muted loop className="video" />
            <div className="video-info">
              <p className="username">@{post.username}</p>
              <p className="caption">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;

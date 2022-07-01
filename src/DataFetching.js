import { useState } from 'react';
import "./style.css";
import Post from './records.json';

export default function DataFetching() {
const [data] = useState(() => {
 const res = JSON.parse(Post)
 return res.post;
})
    return (
    <div className="post">
        <ul>
        
            {data?.map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                </li>
            ))}

        </ul>

    </div>
    )
}
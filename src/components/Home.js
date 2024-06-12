import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'anakngkadiliman thoughts',
            body: 'two days ago I...'
        }, {
            id: 2,
            title: 'why am i still alive?',
            body: 'living is a funny thing.'
        }, {
            id: 3,
            title: 'an abundance of katherines, well hannah',
            body: 'why am i...'
        } 
    ]);
    
    return ( 
        <div className="home">
            {blogs.map((blog) => {
                // You always need a key property for the DOM to not bitch up
                <div className="blog-preview" key={blog.id}>

                </div>
            })}
        </div>
    );
}
 
export default Home;
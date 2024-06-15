import { useState } from 'react';
import BlogList from './BlogList';

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
        <BlogList blogs={blogs}/>
      </div>
    );
}
 
export default Home;
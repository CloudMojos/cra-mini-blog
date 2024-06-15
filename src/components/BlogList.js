const BlogList = (props) => {
    const blogs = props.blogs
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                // You always need a key property for the DOM to not bitch up
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Wrtten by: { blog.author }</p>
                    <br />
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
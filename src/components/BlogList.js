const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map((blog) => (
                // You always need a key property for the DOM not to bitch up
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
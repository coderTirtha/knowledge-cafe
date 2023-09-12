import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { id, coverImage, author, authorImage, title, readingTime, hashtags } = blog;
    return (
        <div>
            <img src={coverImage} alt=""/>
            <div className='flex items-center'>
                <img src={authorImage} alt="" className='rounded-full w-[50px]'/>
                <h3>{author}</h3>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
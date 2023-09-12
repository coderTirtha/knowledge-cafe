import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, coverImage, author, authorImage, title, readingTime, hashtags, postedDate } = blog;
    return (
        <div className='my-4' id={id}>
            <img src={coverImage} alt="" />
            <div className='flex justify-between my-4'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={authorImage} alt="" className='rounded-full w-14 shadow-md' />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>{author}</h3>
                        <p className='text-gray-500'>{postedDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-500'>
                    <p>{(readingTime < 10) ? `0${readingTime} min read` : `${readingTime} min read`}</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-red-400'><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <div className='my-4 space-y-4'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <div className='flex gap-3 text-gray-500'>
                    {
                        hashtags.map(hashtag => <p><a href="#">#{hashtag}</a></p>)
                    }
                </div>
                <button className='text-[#6047EC] underline' onClick={() => handleMarkAsRead(readingTime, id)}>Mark as read</button>
            </div>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
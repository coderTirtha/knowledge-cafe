import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title, id} = bookmark;
    return (
        <div className='bg-base-100 rounded-lg my-4 p-4'>
            <a href={`#${id}`}><h1 className='text-xl font-semibold'>{title}</h1></a>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;
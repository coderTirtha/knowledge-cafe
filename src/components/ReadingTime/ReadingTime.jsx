import PropTypes from 'prop-types';

const ReadingTime = ({readingTime}) => {
    return (
        <div className='bg-[#6047ec1a] text-center m-4 p-4 rounded-lg border-2 border-[#6047EC]'>
            <h3 className='text-xl font-semibold text-[#6047EC]'>Spent time on read: {readingTime} min</h3>
        </div>
    );
};

ReadingTime.propTypes = {
    readingTime: PropTypes.number
}

export default ReadingTime;
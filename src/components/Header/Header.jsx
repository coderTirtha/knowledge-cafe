import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-4 border-b-2 border-gray-300'>
                <h1 className="text-5xl font-bold">Knowledge-Cafe</h1>
                <img src={Profile} alt="" className='w-[50px]' />
            </div>
        </div>
    );
};

export default Header;
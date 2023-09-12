import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-4'>
                <h1 className="text-4xl font-bold">Knowledge-Cafe</h1>
                <img src={Profile} alt="" className='w-[50px]' />
            </div>
            <hr />
        </div>
    );
};

export default Header;
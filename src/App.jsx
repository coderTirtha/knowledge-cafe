import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import ReadingTime from './components/ReadingTime/ReadingTime'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    const bookmarkId = [];
    newBookmarks.forEach(bookmark => {
      bookmarkId.push(bookmark.id);
    });
    const duplicateId = bookmarkId.filter(id => blog.id === id);
    if (duplicateId.length > 1) {
      alert('You have already bookmarked this blog');
    } else {
      setBookmarks(newBookmarks);
    }
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  let count;

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <div className='md:w-1/3'>
          <ReadingTime readingTime={readingTime}></ReadingTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App

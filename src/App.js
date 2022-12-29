import {useState} from 'react'
import {BsCoin,BsFillCameraFill} from 'react-icons/bs'
import {FaHome,FaRegUser,FaGreaterThan} from 'react-icons/fa'
import { BrowserRouter as Router, Routes,Link,Route, useNavigate } from 'react-router-dom';
// import Nav from './Components/Nav';
// import MenuToggler from './Components/MenuToggler';
// import Dashboard from './Pages/Dashboard';
// import CreatePost from './Pages/CreatePost';
// import Category from './Pages/Category';
// import SiteSettings from './Pages/SiteSettings';
// import AllPosts from './Pages/AllPosts';
// import AllUsers from './Pages/AllUsers';
// import Footer from './Components/Footer';


function App(){
  
const [isToggle, setisToggle] = useState(false) 
  const toggleMenu = () => setisToggle(prevVal =>  !prevVal )
 
  return (
   <Router>
    <div className='m-auto relative flex justify-center flex-col h-screen w-full md:w-100 text-gray-900' >
    <div className="bg-purple-700 pt-20  w-full overflow-y-scroll" >
    <div className='text-white  center'>
      <h2 className='font-bold mb-10' >My Profile</h2>
      </div>
    <div className="bg-white  h-screen rounded-t-4xl px-4 pt-6">
      <div className='flex items-center p-4'>
        <div className="rounded-full text-grey-800 w-20 h-20 mr-10 bg-stone-500 relative">
        <img  src="" alt="" />
        <span className="bg-purple-700 rounded-full p-2 absolute -right-0 bottom-1 text-white"><BsFillCameraFill/></span>
        </div>
        <div>
          <h3 className='font-bold'>Popnaija Ent</h3>
          <p className='text-gray-600'>user@gmail.com</p>
        </div>
      </div>
      <div className='bg-rose-100 w-full min-h-20 p-3 rounded-3xl my-8'>
        <div className='px-4 py-2'>
        <small className='-mt-4'>Coin Balance</small>
      <div className='flex justify-between my-2'>
        <div className='flex center'><div className='text-white rounded-full bg-yellow-400 mr-1 center p-2'><BsCoin fontSize={'1.5rem'}/></div><div className='text-xl'>1,278</div></div>
        <button className='bg-purple-700 w-40 py-1 rounded-md text-white text-sm'>Top Balance</button>
      </div>
      </div><hr/>
      <div className='flex p-3 justify-between'>
      <div>Winning Balance</div><div className='flex flex-col'>Jackport<br/><div className='font-bold center text-xl'>$120.00<FaGreaterThan fontSize={'0.75rem'}/> </div></div>
      </div>
      </div>
     <div className='bg-rose-100 w-full h-max p-8 mb-20 rounded-3xl my-8'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid-cols font-bold'>Personal Information</div>
          <div className='grid-cols justify-self-end font-bold'><a className='text-purple-700' href="">Edit</a></div>
          <div className='grid-cols'>Full Name</div>
          <div className='grid-cols justify-self-end text-gray-500'>Popnaija Ent</div>
          <div className='grid-cols'>Email</div>
          <div className='grid-cols justify-self-end text-gray-500'>demo451@yahoo.com</div>
          <div className='grid-cols'>Phone</div>
          <div className='grid-cols justify-self-end text-gray-500'>0123344455</div>
          <div className='grid-cols'>Country</div>
          <div className='grid-cols justify-self-end text-gray-500'>United States</div>
          <div className='grid-cols'>City</div>
          <div className='grid-cols justify-self-end text-gray-500'>Unicon</div>

        </div>
    </div>
      </div>
  </div> 
  <div className='absolute bottom-0 flex center bg-purple-700 w-full h-16 arc'>
      <div className='flex w-6/12 justify-around items-center text-white'>
    <Link to="/wallet"><BsCoin fontSize={"1.5rem"}/></Link>
    <Link to="/home"><FaHome fontSize={"1.5rem"}/></Link>
    <Link to="/profile"><div className='bg-white rounded-full p-3 text-purple-700'><FaRegUser fontSize={"1.5rem"}/></div></Link>
      </div>
  </div>
   </div>
</Router>
  );
}

export default App;


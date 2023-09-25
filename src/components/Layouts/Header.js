import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { Search } from '../Sections/Search';
import { DropdownLoggedIn } from '../Elements/DroppedDownLoggedIn';
import { DropdownLoggedOut } from '../Elements/DroppedDownLoggedOut';
import { useCart } from '../../context';


export const Header = () => {
    const [searchSection, setSearchSection] = useState(false);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const[dropdown, setDropdown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const {cartList} = useCart();
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header>
            <nav class="bg-white dark:bg-gray-800">
                <div class="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                    <Link to="/" class="flex items-center">
                        <img src={Logo} class="mr-3 h-10" alt="CodeVerse Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeVerse</span>
                    </Link>
                    <div class="flex items-center relative">
                        <span onClick={() => setDarkMode(!darkMode)} class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                        <span onClick={() => setSearchSection(!searchSection)} class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                        <Link to="/cart" class="text-gray-700 dark:text-white mr-5">
                            <span class="text-2xl bi bi-cart-fill relative">
                                <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={()=>setDropdown(!dropdown)} class="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                        {dropdown && (token?<DropdownLoggedIn setDropdown={setDropdown}/>:<DropdownLoggedOut setDropdown = {setDropdown}/>)}
                    </div>
                </div>

            </nav>
            {searchSection && <Search setSearchSection={setSearchSection} />}
        </header>
    )
}
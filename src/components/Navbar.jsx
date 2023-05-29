import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

import ButtonMenu from './ButtonMenu'

import { NavbarList } from '../constants/index'

export default function MyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    const MenuList = [
        {
            title: 'Facilities',
            url: '/facilities'
        }
    ]

    const MenuListRestoration = [
        {
            title: 'Intership',
            url: '/intership'
        },
        {
            title: 'News & Updates',
            url: '/news'
        },

    ]


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            {
                NavbarList?.map((item, index) => {
                    if (item?.title === 'About') {
                        return (
                            <ButtonMenu key={index} obj={MenuList} item={item} />

                        )
                    }
                    else if (item?.title === 'Restoration') {
                        return (
                            <ButtonMenu key={index} obj={MenuListRestoration} item={item} />

                        )
                    }

                    else {
                        return (
                            <Typography
                                key={index}
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"
                            >
                                <a href={item.url} className="flex items-center">
                                    {item.title}
                                </a>
                            </Typography>
                        )
                    }
                })
            }


        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex gap-2 justify-center text-center mr-4 cursor-pointer" onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                        <img src='/coral.jpg' alt="logo" width={50} height={50} className="rounded-full" />
                        <Typography
                            as="a"
                            href="/"
                            className="text-2xl font-bold text-center m-auto sm:block hidden"
                        >
                            Coral Restoration
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
        </>
    );
}
import { Link } from "react-router-dom";
import { links } from "./MyLinks"
import { useState } from "react";
const NavLinks = () => {
    const [heading, setheading] = useState("");
    const [subheading, setsubheading] = useState("");

    return (<>
        {links.map((link) => (
            <div>
                <div className="px-3 text-left md:cursor-pointer group">
                    <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group" onClick={() => {
                        heading !== link.name ? setheading(link.name) : setheading('');
                        setsubheading("");
                    }}>
                        {link.name}
                        <span className="text-xl md:hidden inline">
                            <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                        </span>
                        <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                            <ion-icon name="chevron-down"></ion-icon>
                        </span>
                    </h1>
                    {link.submenu && (
                        <div>
                            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                <div className="py-2">
                                    <div className="w-5 h-5 left-3 absolute mt-1 bg-slate-100 rotate-45"></div>
                                </div>
                                <div className="bg-slate-100 p-4 grid grid-cols-3 gap-6 rounded-3xl">
                                    {
                                        link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 className="text-1g font-semibold">{mysublinks.Head}</h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li className="text-sm text-grey-600 my-2.5">
                                                        <Link to={slink.link} className="hover-text-primary">{slink.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/*Mobile menu*/}
                <div className={`
                    ${heading === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                    {/*sublinks */}
                    {
                        link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1 onClick={(() => subheading !== slinks.Head ? setsubheading(slinks.Head) : setsubheading(""))} className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">{slinks.Head}
                                        <span className="text-xl md:mt-1 md:ml-2 inline">
                                            <ion-icon name={`${subheading === slinks.Head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                        </span>
                                    </h1>
                                    <div className={`${subheading === slinks.Head ? "md:hidden" : "hidden"
                                        }`}>
                                        {slinks.sublink.map((slink) => (
                                            <li className="py-3 pl-14">
                                                <Link to={slink.link} className="hover:text-primary">{slink.name}</Link>
                                            </li>
                                        ))}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))}
    </>);
}

export default NavLinks;
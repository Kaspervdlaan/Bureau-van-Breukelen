import React from 'react';

function Footer() {
    return (
        <>
            <div className="h-[30vh] flex flex-col gap-2 bg-gray-800 text-white px-6 py-4">
                <div className="flex bg-red h-4/5">
                    <div className="p-2 w-1/3 ">
                        <ul>
                            <li>Linktosomething</li>
                            <li>Linktosomething</li>
                            <li>Linktosomething</li>
                        </ul>
                    </div>
                    <div className="p-2 w-1/3">
                        <ul>
                            <li>Linktosomething</li>
                            <li>Linktosomething</li>
                            <li>Linktosomething</li>
                        </ul>
                    </div>
                    <div className="p-2 w-1/3">
                        <ul>
                            <li>Linktosomething</li>
                            <li>Linktosomething</li>
                            <li>Linktosomething</li>
                        </ul>
                        {/*<form className="flex flex-col">*/}
                        {/*    <label htmlFor="email">Email</label>*/}
                        {/*    <input className="text-black" name="email" id="email" type="email"/>*/}
                        {/*    <label htmlFor="message">Message</label>*/}
                        {/*    <textarea className="resize-none text-black" name="message" id="message" cols="20" rows="10"></textarea>*/}
                        {/*</form>*/}
                    </div>

                </div>
                <div className="border-t border-t-white flex justify-between h-1/5 p-2">
                    <p>Created by Codeerfabriek</p>
                    <p>Met piemels en poep copyright tm</p>
                    <p>2022</p>
                </div>

            </div>
        </>
    );
}

export default Footer;
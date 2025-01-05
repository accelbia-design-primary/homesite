import React from "react";
import "./MainBody.css";

// import svgs as components
import { ReactComponent as Potpourri } from "./assets/Potpourri.svg";
import { ReactComponent as Unibreakers } from "./assets/Unibreakers.svg";
import { ReactComponent as TPC } from "./assets/TPC.svg";
import { ReactComponent as TPPL } from "./assets/TPPL.svg";
const MainBody = () => {
    // the mainbody class is on continuous animation
    // of linear horizontal movement

    const brands = [
        {
            element: (
                <a href="https://www.potpourri.agency" target="_blank" rel="noreferrer">
                    <Potpourri height={75} opacity={0.75} />
                </a>
            ),
        },
        {
            element: (
                <a
                    href="https://unibreakers.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Unibreakers height={75} opacity={0.75} />
                </a>
            ),
        },
        {
            element: (
                <a
                    href="https://www.thepedagogycommunity.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TPC height={75} opacity={0.75} />
                </a>
            ),
        },
        {
            element: (
                <a href="https://www.telford.in/" target="_blank" rel="noreferrer">
                    <TPPL height={75} opacity={0.75} />
                </a>
            ),
        },
    ];

    // repeat the brand icons 4 times
    const brandslist = brands.concat(brands, brands, brands);

    // create a repeating row of brand icons of 100 elements
    return (
        <div className="mainbody">
            <h3>Our lovely clientele :)</h3>
            <div className="brand-row">
                {brandslist.map((brand) => (
                    <div key={Math.random()} className="brand">
                        {brand.element}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainBody;

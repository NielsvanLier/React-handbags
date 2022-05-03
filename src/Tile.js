import React from "react";

//Als er een img is, toon img en geen tekst   (if statement?)
//Als er geen img is, tel het aantal paragrafen en aak voor elk een <p> aan  (map functie?)

let totalParagraphsText = '';
function Tile ({ image, title, totalParagraphsText }) {
    if (image === true) {
        return (
            <section>
                <img src={image} alt=""/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{title}</h2>
                //neem de paragraphs text en split deze in paragraven op voorwaarde dat er meer dan 3 spaties aan elkaar zijn
                //maak voor elke paragraaf een p element aan
                //vul elke p met een paragraaftekst

                const paragraphs = totalParagraphsText.split("   ");
                for (i = 0; i < paragraphs.length; i++) {
                    return <p>paragraphs[i].value</p>;
            }
            </section>
        )
    }
}

export default Tile;
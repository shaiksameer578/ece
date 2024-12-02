// GRID CARDS RENDERER IN HOME PAGE
const data = {
    cards: [
        {
            id: 1,
            itemTitle: " DIGITAL SIGNAL PROCESSING",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l1_p1",
        },
        {
            id: 2,
            itemTitle: "MICROWAVE ENGINEERING AND OPTICAL COMMUNICATION",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l1_p2",
        },
        {
            id: 3,
            itemTitle: "DIGITAL COMMUNICATION",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l1_p3",
        },
        {
            id: 4,
            itemTitle: "COMPUTER ORGANIZATION & ARCHITECTURE",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l1_p4",
        },
        {
            id: 5,
            itemTitle: "DSP LAB",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l2_p1",
        },
        {
            id: 6,
            itemTitle: "DC LAB",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l2_p2",
        },
        {
            id: 7,
            itemTitle: "ME&OC LAB",
            itemSubtitle:
                "",
            dataLocation: "h_c1_l3_p1",
        },
        
    ],
};
document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector("#gallery-grid");
    for (let t = 0; t < data.cards.length; t += 1) {
        let i = document.createElement("a");
        i.setAttribute("href", ""),
            i.classList.add(`grid-item${data.cards[t].id}`, "grid-item", "hyperlink"),
            i.setAttribute("data-location", data.cards[t].dataLocation),
            (i.innerHTML = `\n                    
                <div class="grid-item-text">\n
                    <h4>${data.cards[t].itemTitle}</h4>\n
                    <span>${data.cards[t].itemSubtitle}</span>\n
                </div>\n                    
                <div class="grid-item-icon">\n
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />\n
                    </svg>\n
                </div>\n
            `),
            e.appendChild(i);
    }
});

// CARD LESSONS RENDERER IN ../pages/courses/c1/index.html
const course_1 = {
    lessonListContainer: [
        {
            id: 1,
            lessonListsItems: [
                {
                    id: 1,
                    itemTitle: "DIGITAL SIGNAL PROCESSING",
                    itemSubtitle: "",
                    dataLocation: "c1_l1_p1",
                    status: false,
                },
                {
                    id: 2,
                    itemTitle: "MICROWAVE ENGINEERING AND OPTICAL COMMUNICATION",
                    itemSubtitle: "",
                    dataLocation: "c1_l1_p2",
                    status: false,
                },
                {
                    id: 3,
                    itemTitle: "DIGITAL COMMUNICATION",
                    itemSubtitle: "",
                    dataLocation: "c1_l1_p3",
                    status: false,
                },
                {
                    id: 4,
                    itemTitle: "COMPUTER ORGANIZATION & ARCHITECTURE",
                    itemSubtitle: "",
                    dataLocation: "c1_l1_p4",
                    status: false,
                },
               
            ],
        },

           
        {
            id: " ",
            lessonListsItems: [
                {
                    id: 1,
                    itemTitle: "",
                    itemSubtitle: "",
                    dataLocation: "",
                    status: false,
                },
            ],
        },
    ],
};


const course_2 = {
    lessonListContainer: [
        {
            id: 1,
            lessonListsItems: [
                {
                    id: 1,
                    dataLocation: "c1_l2_p1",
                    itemTitle: "DSP Lab",
                    itemSubtitle: "",
                    status: false,
                },
                {
                    id: 2,
                    dataLocation: "c1_l2_p2",
                    itemTitle: "DC Lab",
                    itemSubtitle: "",
                    status: false,
                },
                {
                    id: 3,
                    dataLocation: "c1_l3_p1",
                    itemTitle: "ME&OC Lab",
                    itemSubtitle: "",
                    status: false,
                },
                
            ],
        },
        
    ],
};
const course_3 = {
    lessonListContainer: [
        {
            id: 1,
            lessonListsItems: [
                {
                    id: 1,
                    dataLocation: " ",
                    itemTitle: "",
                    itemSubtitle: "",
                    status: false,
                },
               
            ],
        },
        
    ],
};
document.addEventListener("DOMContentLoaded", () => {
    const lessonListContainers = document.querySelectorAll(".lesson-list-container");

    lessonListContainers.forEach((container) => {
        const courseKey = container.getAttribute("course-key");
        let courseData;

        if (courseKey === "course_1") {
            courseData = course_1;
        } else if (courseKey === "course_2") {
            courseData = course_2;
        } else {
            console.error("Invalid course key:", courseKey);
            return;
        }

        const lessonLists = container.querySelectorAll(".lesson-list");

        lessonLists.forEach((lessonList) => {
            const key = lessonList.getAttribute("lesson-key");
            const lessonListData = courseData.lessonListContainer.find((list) => list.id == key);

            if (lessonListData) {
                const lessonListItems = lessonListData.lessonListsItems;
                const lessonListItemsContainer = lessonList.querySelector(".lesson-list-items");

                lessonListItems.forEach((item) => {
                    const listItem = document.createElement("a");
                    listItem.classList.add("topic-item", "hyperlink");
                    listItem.setAttribute("href", "");
                    listItem.setAttribute("data-location", item.dataLocation);

                    let lessonStatus =
                        item.status === true || item.status === "true"
                            ? "display: block; color: lightgreen;"
                            : (item.status === null && item.status === false) || item.status === "false"
                            ? "display: none;"
                            : "display: none;";

                    listItem.innerHTML = `
                        <div class="item-content">
                            <div class="item-number"><span>${item.id}</span></div>
                            <div class="item-text">
                                <h4>${item.itemTitle}</h4>
                                <span>${item.itemSubtitle}</span>
                            </div>
                        </div>
                        <div class="item-status-icon">
                            <svg style="${lessonStatus}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    `;
                    lessonListItemsContainer.appendChild(listItem);
                });
            } else {
                const lessonListItemsContainer = lessonList.querySelector(".lesson-list-items");
                const listItem = document.createElement("div");
                listItem.classList.add("topic-item");

                listItem.innerHTML = `
                    <div class="item-content">
                        <div class="item-text">
                            <h4>Coming Soon!</h4>
                        </div>
                    </div>
                    <div class="item-status-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                `;
                lessonListItemsContainer.appendChild(listItem);
            }
        });
    });
});

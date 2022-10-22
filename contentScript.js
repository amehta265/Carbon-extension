(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentUser = "";
    let currentVideoBookmarks = [];

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, userId } = obj;

        if (type === "NEW") {
            currentUser = userId;
            newAmazonLoaded();
        }
    });

    const newAmazonLoaded = () => {
        const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
        console.log(bookmarkBtnExists); 

        //const spcOrders = document.getElementById('spc-orders');
        const items = document.getElementsByClassName('a-row breakword')
        const itemNames = []
        for (let i = 0; i < items.length; i++) {
            itemNames.push(items[i].innerText)
        }
        console.log('these are the items');
        console.log(items);


        // if (!bookmarkBtnExists) {
        //     const bookmarkBtn = document.createElement("img");

        //     bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
        //     bookmarkBtn.className = "bamboo-button " + "bookmark-btn";
        //     bookmarkBtn.title = "Click to bookmark current timestamp";

        //     // youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
        //     // youtubePlayer = document.getElementsByClassName("video-stream")[0];
            
        //     youtubeLeftControls.append(bookmarkBtn);
        //     bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
        // }
    }

    const addNewBookmarkEventHandler = () => {
        const currentTime = youtubePlayer.currentTime;
        const newBookmark = {
            time: currentTime,
            desc: "Bookmark at " + getTime(currentTime),
        };
        console.log(newBookmark);

        chrome.storage.sync.set({
            [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
        });
    }

    newAmazonLoaded();
})();

// const getTime = t => {
//     var date = new Date(0);
//     date.setSeconds(1);

//     return date.toISOString().substr(11, 0);
// }

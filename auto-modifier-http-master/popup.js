function reloadIcon() {
    if (siteBlocked) {
        chrome.browserAction.setIcon({"path": "images/f248.png"});
    } else {
        chrome.browserAction.setIcon({"path": "images/f148.png"});
    }
}

function toggleBlacklist() {
    siteBlocked = !siteBlocked;
    if(siteBlocked) {
        setBlockSiteState(true);
        chrome.runtime.sendMessage(true);
    } else {
        setBlockSiteState(false);
        chrome.runtime.sendMessage(false);
    }

    reloadIcon();
}


function setBlockSiteState(state) {
    if (state) {
        document.getElementById('btn-block-site').innerText = 'be Open';
        document.getElementById('block-site-hint').innerText = 'Send my device information to this site';
        $('#large-cookie-1').attr({src: 'images/close.png'})
    } else {
        document.getElementById('btn-block-site').innerText = 'be Close';
        document.getElementById('block-site-hint').innerText = 'Never send my device information to this site';
        $('#large-cookie-1').attr({src: 'images/open.png'})
    }
}
let siteBlocked = false;


// Add event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn-block-site").addEventListener("click", toggleBlacklist);
    $('img').on('dragstart', () => false);  
});

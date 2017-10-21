window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();
var dashboardTabId = -1; // no id by default
browser.browserAction.onClicked.addListener(function (activeTab) {
    if (dashboardTabId === -1) {
        browser.tabs.create({ url: '/extension/ui/dashboard.html' }, function (tab) {
        //browser.tabs.create({ url: 'https://login.aconex.com' }, function (tab) {
            dashboardTabId = tab.id;
        });
    }
    else {
        browser.tabs.update(dashboardTabId, { "active": true, "selected": true });
    }
});
browser.tabs.onRemoved.addListener(function (removetabid, removeInfo) {
    if (dashboardTabId !== -1 && removetabid === dashboardTabId) {
        dashboardTabId = -1;
    }
});

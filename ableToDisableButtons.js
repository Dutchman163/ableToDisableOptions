chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleCheckboxes
    });
});
function toggleCheckboxes() {
    const boxes = document.querySelectorAll('input[type=checkbox]');
    const allChecked = Array.from(boxes).every(cb => cb.checked);
    boxes.forEach(cb => cb.checked = !allChecked);
}
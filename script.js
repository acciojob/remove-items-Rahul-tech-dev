//your JS code here. If required.
var button=document.querySelector('input[type="button"]');
var option=document.querySelector('#colorSelect');

button.addEventListener("click", () => {
    if(option.selectedIndex !== -1){
        option.remove(option.selectedIndex);
    }
});
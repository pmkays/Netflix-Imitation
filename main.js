//get all tab and tab contents
const tabItems = document.querySelectorAll('.tab-item'); //gets put into a nodelist, similar to an array
const tabContentItems =  document.querySelectorAll('.tab-content-item'); 

function selectItem(e)
{
    remove();

    //add a border to the one just clicked
    this.classList.add('tab-border');

    //find which tab has been clicked and then append with -content so that show class can be added
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show');
}

function remove()
{
    //clear out any borders/contents first
    tabItems.forEach(item => item.classList.remove('tab-border'));
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//add event listener for clicks for each tab
tabItems.forEach(item => item.addEventListener('click', selectItem));

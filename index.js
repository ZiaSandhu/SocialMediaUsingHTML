//SideBar
const menuItem = document.querySelectorAll('.menu-item');
//Messages
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');

const colorPallet = document.querySelectorAll('.choose-color span')

const backGroundChange= document.querySelectorAll('.choose-bg div')

// const bg1=document.querySelector('.bg-1')
// const bg2=document.querySelector('.bg-2')
// const bg3=document.querySelector('.bg-3')

const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}

menuItem.forEach(item => {
    item.addEventListener('click' , () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }
        else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name= user.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display='none'
        }
    })
}

// Search Chat
messageSearch.addEventListener('keyup',searchMessage);

// highlight message card by click message button
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000);
})

// Theme display customization

const openThemeModal = () => {
    themeModal.style.display='grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click',openThemeModal)

const removeSizeSelector= ()=>{
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    let fontsize;

    
    size.addEventListener('click',()=>{
        removeSizeSelector()
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
         fontsize='10px';
            root.style.setProperty('----sticky-top-left','5.4rem')
            root.style.setProperty('----sticky-top-right','5.4rem')
        }else if(size.classList.contains('font-size-2')){
         fontsize='13px';
            root.style.setProperty('----sticky-top-left','5.4rem')
            root.style.setProperty('----sticky-top-right','-7rem')
        }else if(size.classList.contains('font-size-3')){
         fontsize='16px';
            root.style.setProperty('----sticky-top-left','-2rem')
            root.style.setProperty('----sticky-top-right','-17rem')
        }else if(size.classList.contains('font-size-4')){
         fontsize='19px';
            root.style.setProperty('----sticky-top-left','-5rem')
            root.style.setProperty('----sticky-top-right','-25rem')
        }else if(size.classList.contains('font-size-5')){
         fontsize='22px';
            root.style.setProperty('----sticky-top-left','-12rem')
            root.style.setProperty('----sticky-top-right','-35rem')
        }
        document.querySelector('html').style.fontSize= fontsize;
    })

})

const changeActiveColorClass= ()=>{
    colorPallet.forEach(color => {
        color.classList.remove('active');
    })
}
colorPallet.forEach(color =>{
    color.addEventListener('click', ()=>{
        let primaryHue;

        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=202;
        }else if(color.classList.contains('color-5')){
            primaryHue=152;
        }
        changeActiveColorClass()
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})


const changeActiveBackgroundClass= ()=>{
    backGroundChange.forEach(color => {
        color.classList.remove('active');
    })
}

backGroundChange.forEach(light =>{
    light.addEventListener('click',()=>{
        let lightColorBrightness;
        let whiteColorBrightness;
        let darkColorBrightness;
        if(light.classList.contains('bg-1')){
            lightColorBrightness='95%';
            whiteColorBrightness='100%';
            darkColorBrightness='17%';
        }else if(light.classList.contains('bg-2')){
            lightColorBrightness='15%';
            whiteColorBrightness='20%';
            darkColorBrightness='95%';
        }else if(light.classList.contains('bg-3')){
            lightColorBrightness='0%';
            whiteColorBrightness='10%';
            darkColorBrightness='95%';
        }
        root.style.setProperty('--light-color-lightness',lightColorBrightness);
        root.style.setProperty('--white-color-lightness',whiteColorBrightness);
        root.style.setProperty('--date-color-lightness',darkColorBrightness);
        changeActiveBackgroundClass()
        light.classList.add('active');
    })
})

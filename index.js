const closeX=document.querySelector('#closeX');
const body=document.querySelector('body');
const openBtn=document.querySelector('#openBtn');

body.addEventListener('click', e=>
{
    if(e.target == openBtn)
    { 
        document.querySelector('#links').style.visibility= 'visible';
        document.querySelector('#main-doc').style.marginLeft='150px';
        document.querySelector('h1').style.marginLeft='150px';
        openBtn.style.visibility='hidden'
    }
    if(e.target == closeX)
    {
        document.querySelector('#links').style.visibility= 'hidden';
        document.querySelector('#main-doc').style.marginLeft='0px'
        document.querySelector('h1').style.marginLeft='20px';
        openBtn.style.visibility='visible'
    }
})

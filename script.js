const opening=document.getElementById('opening');
const button=document.getElementById('openInvitation');
const invitation=document.getElementById('invitation');

button.addEventListener('click',()=>{
  opening.classList.add('opening-out');
  invitation.classList.add('ready');
  // Hero is the FIRST section of the invitation — do not jump to the details page.
  window.scrollTo({top:0,left:0,behavior:'instant'});
  setTimeout(()=>opening.classList.add('closed'),850);
});

const target=new Date('2026-10-14T17:00:00+03:00').getTime();
function tick(){
  let d=Math.max(0,target-Date.now());
  const days=Math.floor(d/86400000); d%=86400000;
  const hours=Math.floor(d/3600000); d%=3600000;
  const mins=Math.floor(d/60000); d%=60000;
  const secs=Math.floor(d/1000);
  document.getElementById('days').textContent=String(days).padStart(2,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('mins').textContent=String(mins).padStart(2,'0');
  document.getElementById('secs').textContent=String(secs).padStart(2,'0');
}
tick();setInterval(tick,1000);

document.getElementById('Noakhili-now').addEventListener('click',function(){
    const noakhiliDonate = parseFloat(document.getElementById('donate2').value);
    const NoakhiliDonate = parseFloat(document.getElementById('noakhaliCollect').innerText);
    const Blance = parseFloat(document.getElementById('mainBlance').innerText);
    if(noakhiliDonate > Blance){
        document.getElementById('logic-error1').classList.remove('hidden');
        return;
    }

    if(noakhiliDonate < 0 || isNaN(noakhiliDonate)){
        document.getElementById('Amount-error1').classList.remove('hidden');
        return;
    }
    
    const total = NoakhiliDonate + noakhiliDonate ;
    document.getElementById('noakhaliCollect').innerText = total ;

    
    const MainBlance = Blance - noakhiliDonate ;
    document.getElementById('mainBlance').innerText = MainBlance;

    const HistoryIteam = document.createElement('div');
    HistoryIteam.className = "border rounded-xl p-5 border-[#1111111A]";
    HistoryIteam.innerHTML = `
    <p class="text-2xl mb-4 font-bold text-[#111111]">${noakhiliDonate} Taka is Donate for Flood Relif in  Noakhali, Bangladesh</p>
    <p class="text-base font-light text-[#111111B3] w-full">Date: ${new Date()}</p>
    `;
    const HistoryContainer = document.getElementById('historyList');
    HistoryContainer.insertBefore(HistoryIteam,HistoryContainer.firstChild);

});


document.getElementById('feni-now').addEventListener('click',function(){
    const feni_donate = parseFloat(document.getElementById('donate1').value);
    const feniDonate = parseFloat(document.getElementById('feni_collect').innerText);
    const Blance = parseFloat(document.getElementById('mainBlance').innerText);
    if(feni_donate > Blance){
        document.getElementById('logic-error2').classList.remove('hidden');
        return;
    }
    if(feni_donate < 0 || isNaN(feni_donate)){
        document.getElementById('Amount-error2').classList.remove('hidden');
        return;
    }
    const total = feni_donate + feniDonate ;
    document.getElementById('feni_collect').innerText = total ;
   
    const MainBlance = Blance - feni_donate ;
    document.getElementById('mainBlance').innerText = MainBlance;

    const HistoryIteam = document.createElement('div');
    HistoryIteam.className = "border rounded-xl p-5 border-[#1111111A]";
    HistoryIteam.innerHTML = `
    <p class="text-2xl mb-4 font-bold text-[#111111]">${feni_donate} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-base font-light text-[#111111B3] w-full">Date: ${new Date()}</p>
    `;
    const HistoryContainer = document.getElementById('historyList');
    HistoryContainer.insertBefore(HistoryIteam,HistoryContainer.firstChild);
});


document.getElementById('donate_stProtest').addEventListener('click',function(){
    const protest_donate = parseFloat(document.getElementById('donate3').value);
    const protestDonate = parseFloat(document.getElementById('stProtest_collect').innerText);
    const Blance = parseFloat(document.getElementById('mainBlance').innerText);
    
    if(protest_donate > Blance){
        document.getElementById('logic-error3').classList.remove('hidden');
        return;
    }

    if(protest_donate < 0 || isNaN(protest_donate)){
        document.getElementById('Amount-error3').classList.remove('hidden');
        return;
    }
    const total = protestDonate + protest_donate;
    document.getElementById('stProtest_collect').innerText = total ;
    const MainBlance = Blance - protest_donate ;
    document.getElementById('mainBlance').innerText = MainBlance;

    const HistoryIteam = document.createElement('div');
    HistoryIteam.className = "border rounded-xl p-5 border-[#1111111A]";
    HistoryIteam.innerHTML = `
    <p class="text-2xl mb-4 font-bold text-[#111111]">${protest_donate} Taka is Donated for Injured in the Quota Movement</p>
    <p class="text-base font-light text-[#111111B3] w-full">Date: ${new Date()}</p>
    `;
    const HistoryContainer = document.getElementById('historyList');
    HistoryContainer.insertBefore(HistoryIteam,HistoryContainer.firstChild);
});

document.getElementById('donateNow').addEventListener('click',function(){
    
});


const HistoryTab = document.getElementById('history');
const Donate = document.getElementById('donateNow');
    HistoryTab.addEventListener('click',function(){
    const historyIteam = document.getElementById('history-section');
    historyIteam.classList.remove('hidden');
    HistoryTab.classList.add(
        'btn',
        'btn-primary',
        'text-[#111111]',
        'font-semibold', 
        'text-xl', 
        'border-none', 
        'hover:bg-[#B4F461]', 
        'bg-[#B4F461]'
    );

    Donate.classList.remove(
        'btn',
        'btn-primary',
        'text-[#111111]',
        'font-semibold', 
        'text-xl', 
        'border-none', 
        'hover:bg-[#B4F461]', 
        'bg-[#B4F461]'
    );

    Donate.classList.add(
        'btn',
        'btn-ghost',
        'text-[#111111]',
        'border-[#1111114D]'
    );

    const card = document.getElementById('donateCard');
    card.classList.add('hidden');
});

Donate.addEventListener('click', function(){
    const card = document.getElementById('donateCard');
    card.classList.remove('hidden');

    HistoryTab.classList.remove(
        'text-[#111111]',
        'font-semibold', 
        'text-xl', 
        'border-none', 
        'hover:bg-[#B4F461]', 
        'bg-[#B4F461]'
    );

    Donate.classList.add(
        'btn',
        'btn-primary',
        'text-[#111111]',
        'font-semibold', 
        'text-xl', 
        'border-none', 
        'hover:bg-[#B4F461]', 
        'bg-[#B4F461]'
    );

    const historyIteam = document.getElementById('history-section');
    historyIteam.classList.add('hidden');
});

function clearField2(){
    document.getElementById('donate2').value = '';
    document.getElementById('donate1').value = '';
    document.getElementById('donate3').value = '';
};
document.getElementById('blogBtn').addEventListener('click',function(){
    window.location.href = '/Blog.html';
});
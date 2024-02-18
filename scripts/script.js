// alert("connect hoise")

const btnElement = document.getElementsByClassName("all-btn");
let count=0;
let totalSeatLeft=40;

for ( const btn of btnElement){
    
    btn.addEventListener('click',function(event){
        // const seatName = event.target;
        // console.log(seatName);
        // seatName.classList.add('bg')

        // event.target.classList.add('bg-freen')
        
        //added seats
        count++;
        const addedSeat = document.getElementById("added-seat");
        addedSeat.innerText=count;



        //totalLeftSeat 
        totalSeatLeft--;
        const seatLeftText = document.getElementById("seat-left");
        seatLeftText.innerText= totalSeatLeft;




        
        
        
    })
}
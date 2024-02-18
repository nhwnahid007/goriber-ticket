// alert("connect hoise")

const btnElement = document.getElementsByClassName("all-btn");
let count = 0;
let totalSeatLeft = 40;

for (const btn of btnElement) {
  btn.addEventListener("click", function (event) {
    count++;
    totalSeatLeft--;

    // event.target.classList.add('bg-freen')

    //added seats
    if (count <= 4) {
        
      const seatName = event.target;
      console.log(seatName);    
      seatName.classList.add("bg-green");
      seatName.classList.add("pointer-events-none");
    //   seatName.setAttribute("disabled", true);
       

      const addedSeat = document.getElementById("added-seat");
      addedSeat.innerText = count;
      //totalLeftSeat
      const seatLeftText = document.getElementById("seat-left");
      seatLeftText.innerText = totalSeatLeft;
      
    } else {
      alert("No more than 4");

      return;
    }
  });
}

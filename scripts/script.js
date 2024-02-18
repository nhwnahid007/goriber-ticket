// alert("connect hoise")

const btnElement = document.getElementsByClassName("all-btn");
let count = 0;
let totalSeatLeft = 40;
let sum=0;
const ticketPrice=550;


for (const btn of btnElement) {
  btn.addEventListener("click", function (event) {
    count++;
    totalSeatLeft--;

    // event.target.classList.add('bg-freen')

    //added seats
    if (count <= 4) {
        
      const seatName = event.target;
    //   console.log(seatName);    
      seatName.classList.add("bg-green");
      seatName.classList.add("pointer-events-none");
    //   seatName.setAttribute("disabled", true);
       

      const addedSeat = document.getElementById("added-seat");
      addedSeat.innerText = count;
      //totalLeftSeat
      const seatLeftText = document.getElementById("seat-left");
      seatLeftText.innerText = totalSeatLeft;


      //appending
      const appendContainer = document.getElementById("append-container");
      const li=document.createElement('li')
      const p1=document.createElement('p')
      const p2=document.createElement('p')
      const p3=document.createElement('p')
        p1.innerText=event.target.innerText;
        p2.innerText='Economy';
        p3.innerText='550'
      li.appendChild(p1)
      li.appendChild(p2)
      li.appendChild(p3)

      appendContainer.appendChild(li)
      console.log(appendContainer);

        const totalPrice = document.getElementById("total-price").innerText;
        let convertedTotalPrice=parseInt(totalPrice);
        // sum =count *ticketPrice;
        sum+=ticketPrice;

        document.getElementById("total-price").innerText=sum;

        

        // console.log(sum);

        

      
    } else {
      alert("No more than 4");

      return;
    }
  });
}

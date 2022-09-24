//First section

function Data (){
    let request =new XMLHttpRequest ();

function received_data() {
    let return_info = this.responseText;

    let script_format = JSON.parse(return_info);
    let ul = document.createElement("ul");
    ul.classList.add("ul-style");
    script_format.data.forEach((element) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = element.first_name + " " + element.last_name;
      let img = document.createElement("img");
      img.setAttribute("src", element.avatar);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(img);
    });
    document.querySelector(".div").appendChild(ul);
  }
  request.addEventListener("load", received_data);
  request.open("GET", "https://reqres.in/api/users?page=2");
  request.send();
}

Data();



//second section


function Data_1() {
  let request_1 = new XMLHttpRequest();
  function received_data_1() {
    let return_info_1 = this.responseText;
    let script_format_1 = JSON.parse(return_info_1);
    let ul = document.createElement("ul");
    script_format_1.data.forEach((element) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = element.name + " " + " " + element.year;
      ul.appendChild(li);
      li.appendChild(p);
    });
    document.getElementById("div").appendChild(ul);
  }

  request_1.addEventListener("load", received_data_1);
  request_1.open("GET", "https://reqres.in/api/unknown");
  request_1.send();
}
Data_1();
/*Program to selecte the Given Provinces then shows all the districts which lie in a selected 
province.*/ 

// Provinces Lists 
let prvnc = [
   {
    p: "Madhesh",
   d:["Sarlahi", "Rautahat", "Bara", "Parsa", "Dhanusha", "Siraha", "Mahottari", "Saptari"]
   },
   {
    p: "Koshi",
    d:["Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", "Sunsari", "Taplejung", "Tehrathum", "Udayapur"]
   }, 
   {
    p:"Bagmati",
    d:["Sindhuli", "Ramechhap", "Dolakha", "Bhaktapur", "Dhading", "Kathmandu", "Kavrepalanchowk", "Lalitpur", "Nuwakot", "Rasuwa", "Sindhupalchok", "Chitwan", "Makwanpur"]
   },
   {
    p:"Gandaki",
    d:["Baglung", "Gorkah", "Kaski", "Lamjung", "Manang", "Mustang", "Myagdi", "Nawalparasi", "Parbat", "Syangja", "Tanahu"]
   },
   {
    p:"Lumbini",
    d:["Kapilvastu", "Nawalparasi", "Rupandehi", "Arghakhanchi", "Gulmi", "Palpa", "Dang", "Pyuthan", "Rolpa", "Eastern Rukum", "Banke", "Bardiya"]
   },
   {
    p:"Karnali",
    d:["Rukum", "Salyan", "Dolpa", "Humla", "Jumla", "Kalikot", "Mugu", "Surkhet", "Jajarkot", "Dailekh",]
   },
   {
    p:"Sudarpaschim",
    d:["Kailali", "Achham", "Doti", "Bajhang", "Bajura", "Kanchanpur", "Dadeldhura", "Baitadi", "Darchula"]
   }
]

let ht_Provinces = document.querySelector('#provinces');
let ht_districts = document.querySelector("#districts")
let options = document.querySelectorAll(".options")


// Filling Provinces 
prvnc.forEach(function(val, index){
let prvncElem = document.createElement('option')
prvncElem.innerText=prvnc[index].p
ht_Provinces.appendChild(prvncElem)
prvncElem.setAttribute('id', index)
})


ht_Provinces.addEventListener('change', function(){
    // for Clearing the District after changing option in province 
    ht_districts.innerHTML= '<option value="" disabled selected>Districts</option>';

  // Get selected Option's Value
  let selectedOpt =ht_Provinces.options[ht_Provinces.selectedIndex] 
  
  // Get selected Option's ID 
  let selectedId = selectedOpt.id;
  console.log(selectedId)
  
// Filling the value in DIstrict after selecting province 
 prvnc.forEach(function(v, i){
let distElem = document.createElement('option');
distElem.innerText=prvnc[selectedId].d[i];
ht_districts.appendChild(distElem);
})
})

/*Program to selecte the Given Provinces then shows all the districts which lie in a selected 
province.*/ 


// Provinces Lists 
let provincesLists = [
   {
    prov: "Madhesh",
   dist:["Sarlahi", "Rautahat", "Bara", "Parsa", "Dhanusha", "Siraha", "Mahottari", "Saptari"]
   },
   {
    prov: "Koshi",
    dist:["Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", "Sunsari", "Taplejung", "Tehrathum", "Udayapur"]
   }, 
   {
    prov:"Bagmati",
    dist:["Sindhuli", "Ramechhap", "Dolakha", "Bhaktapur", "Dhading", "Kathmandu", "Kavrepalanchowk", "Lalitpur", "Nuwakot", "Rasuwa", "Sindhupalchok", "Chitwan", "Makwanpur"]
   },
   {
    prov:"Gandaki",
    dist:["Baglung", "Gorkah", "Kaski", "Lamjung", "Manang", "Mustang", "Myagdi", "Nawalparasi", "Parbat", "Syangja", "Tanahu"]
   },
   {
    prov:"Lumbini",
    dist:["Kapilvastu", "Nawalparasi", "Rupandehi", "Arghakhanchi", "Gulmi", "Palpa", "Dang", "Pyuthan", "Rolpa", "Eastern Rukum", "Banke", "Bardiya"]
   },
   {
    prov:"Karnali",
    dist:["Rukum", "Salyan", "Dolpa", "Humla", "Jumla", "Kalikot", "Mugu", "Surkhet", "Jajarkot", "Dailekh",]
   },
   {
    prov:"Sudarpaschim",
    dist:["Kailali", "Achham", "Doti", "Bajhang", "Bajura", "Kanchanpur", "Dadeldhura", "Baitadi", "Darchula"]
   }
]

let ht_Provinces = document.querySelector('#provinces');
let ht_districts = document.querySelector("#districts")
// TO SHOW PROVINCES IN PROVINCE BOX 
provincesLists.forEach(province => {
    let optionElement = document.createElement("option");
    optionElement.value = province.prov;
    optionElement.textContent = province.prov;
    ht_Provinces.appendChild(optionElement);
});
// ----------------------------

// If Changes in Provinces selected option
ht_Provinces.addEventListener("change", function () {
    let selectedProvince = ht_Provinces.value;
    
    // Clear the district select
    ht_districts.innerHTML = '<option value="" disabled selected>Districts</option>';

    if (selectedProvince) {
        // Find the province in the provincesList
        let matchingProvince = provincesLists.find(province => province.prov === selectedProvince);

        if (matchingProvince) {
            // Populate the district select with districts from the selected province
            matchingProvince.dist.forEach(district => {
                let optionElement = document.createElement("option");
                optionElement.value = district;
                optionElement.textContent = district;
                ht_districts.appendChild(optionElement);
            });
        }
    }
});



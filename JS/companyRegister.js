import { GetAllDatas, PostData } from "./requests/requests.js";
import BaseUrl from "./requests/baseUrl.js";

let registerForm = document.querySelector(".company-register")
let name = document.querySelector("#name")
let location = document.querySelector("#location")
let website = document.querySelector("#website")
let password = document.querySelector("#password")


registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCompany = {
        name: name.value,
        location: location.value,
        password: password.value,
        website:website.value
    }
    GetAllDatas(`${BaseUrl}/company`)
        .then(res => {
            console.log(res.datas);
            
            let companies = res.datas
            let findedCompany = companies.find(company => company.name == name.value)
            if (findedCompany) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Bu Company Name qeydiyyatdan kecilib artiq!"
                });
            } else {
                PostData(`${BaseUrl}/company`, newCompany)
                    .then(() => {
                        window.location.href = "companyLogin.html"
                    })
            }
            Clear()
        })

})
function Clear(){
     name.value = ''
    location.value = ''
   password.value = ''
   website.value = ''
}
import BaseUrl from "./requests/baseUrl.js";
import { GetAllDatas } from "./requests/requests.js";

let userLogin = document.querySelector(".company-login")
let name = document.querySelector("#name")
let password = document.querySelector("#password")

userLogin.addEventListener("submit", (e) => {
    e.preventDefault()

    GetAllDatas(`${BaseUrl}/company`)
        .then(res => {
            let companies = res.datas
            let findedCompany = companies.find(company => company.name == name.value && company.password == password.value)
            if (findedCompany) {
                Swal.fire({
                    icon: "success",
                    title: "WELCOME!!!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid password or Company name!"
                });
            }
            Clear()
        })
})
function Clear() {
    name    .value = ""
    password.value = ""
}
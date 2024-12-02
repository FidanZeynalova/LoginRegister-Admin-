import BaseUrl from "./requests/baseUrl.js";
import { GetAllDatas } from "./requests/requests.js";

let userLogin = document.querySelector(".user-login")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

userLogin.addEventListener("submit", (e) => {
    e.preventDefault()

    GetAllDatas(`${BaseUrl}/users`)
        .then(res => {
            let users = res.datas
            let findedUser = users.find(user => user.email == email.value && user.password == password.value)
            if (findedUser) {
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
                    text: "Invalid password or email!"
                });
            }
            Clear()
        })
})
function Clear() {
    email.value = ""
    password.value = ""
}
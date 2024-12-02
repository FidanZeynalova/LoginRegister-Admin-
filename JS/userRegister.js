import { GetAllDatas, PostData } from "./requests/requests.js";
import BaseUrl from "./requests/baseUrl.js";

let registerForm = document.querySelector(".user-register")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newUser = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    GetAllDatas(`${BaseUrl}/users`)
        .then(res => {
            let users = res.datas
            let findUser = users.find(user => user.email == email.value)
            if (findUser) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            } else {
                PostData(`${BaseUrl}/users`, newUser)
                    .then(() => {
                        window.location.href = "userLogin.html"
                    })
            }
            Clear()
        })

})

function Clear() {
    name.value = ""
    email.value = ""
    password.value = ""
}
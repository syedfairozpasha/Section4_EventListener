
var btnsubmit = window.document.getElementById("auth_submit");
var inputusernamesubmit = window.document.getElementById("username_1");
var inputpasswordsubmit = window.document.getElementById("password_1");


if(btnsubmit)
    btnsubmit.addEventListener("click",checkAuthentication);

if(inputpasswordsubmit)
    inputpasswordsubmit.addEventListener("keypress",validateUser_keypress)

if(inputusernamesubmit)
    inputusernamesubmit.addEventListener("keypress",validateUser_keypress)

function createHTMLElement()
{
    var ul = window.document.getElementById("us_list");
    var li = window.document.createElement("li");
    li.appendChild(document.createTextNode(inputusernamesubmit.value));
    ul.appendChild(li);
    //console.log("element is created");
}
function checkAuthentication()
{
        console.log("inside the function")
       // console.log(inputusernamesubmit.value);
        if(inputusernamesubmit.value.length >0 && inputpasswordsubmit.value.length >0)
        {
            createHTMLElement();
            console.log(inputusernamesubmit.value);
            console.log(inputpasswordsubmit.value);
         }
}
function validateUser_keypress(ent)
{
    //console.log(ent);
    if(ent.keyCode === 13 && (inputpasswordsubmit.value.length > 0 && inputusernamesubmit.value.length > 0))
    {
        createHTMLElement();
    }
}

console.log("We will send these details to server");

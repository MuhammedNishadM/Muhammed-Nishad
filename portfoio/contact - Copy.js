function cont(event) {
    event.preventDefault(); 
    var parm = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_ponkte5";
    const templateID = "template_rfwke15";

    emailjs.send(serviceID, templateID, parm)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully");
    })
    .catch((err) => console.log(err));
}

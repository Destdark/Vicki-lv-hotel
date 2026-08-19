function sendBooking(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    const message =
        "🏨 VICKI SPARKLE HOTEL%0A%0A" +
        "New Room Booking%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Room: " + room + "%0A" +
        "Check-in: " + checkin + "%0A" +
        "Check-out: " + checkout;

    const whatsappNumber = "2348100247194";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + message,
        "_blank"
    );
}
// ================================
// PROJECTLOOP JAVASCRIPT
// ================================


// Student Verification

const verificationForm = document.getElementById("verificationForm");

if (verificationForm) {

    verificationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("✅ Student verified successfully!");

        window.location.href = "profile.html";

    });

}


// ================================
// Sell / Listing Form
// ================================

const listingForm = document.getElementById("listingForm");

if (listingForm) {

    listingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("🎉 Your resource has been posted successfully!");

        window.location.href = "profile.html";

    });

}


// ================================
// Search
// ================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        const searchValue =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".browse-card");

        cards.forEach(function(card) {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(searchValue)) {

                card.style.display = "grid";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ================================
// Chat
// ================================

const sendMessage =
    document.getElementById("sendMessage");

const messageInput =
    document.getElementById("messageInput");

const messages =
    document.querySelector(".messages");


if (sendMessage && messageInput && messages) {

    sendMessage.addEventListener("click", function() {

        const message =
            messageInput.value.trim();

        if (message === "") {
            return;
        }


        const newMessage =
            document.createElement("div");

        newMessage.className =
            "message sent";

        newMessage.textContent =
            message;


        messages.appendChild(newMessage);

        messageInput.value = "";

        messages.scrollTop =
            messages.scrollHeight;

    });


    messageInput.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            sendMessage.click();

        }

    });

}


// ================================
// Buy / Rent buttons
// ================================

const primaryButtons =
    document.querySelectorAll(".primary-btn");

primaryButtons.forEach(function(button) {

    if (
        button.innerText.trim() === "Buy" ||
        button.innerText.trim() === "Rent"
    ) {

        button.addEventListener("click", function() {

            alert("This is a prototype. Transaction functionality will be added later.");

        });

    }

});


// ================================
// Profile Tabs
// ================================

const profileTabs =
    document.querySelectorAll(".profile-tab");

profileTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        profileTabs.forEach(function(item) {

            item.classList.remove("active-tab");

        });

        tab.classList.add("active-tab");

    });

});
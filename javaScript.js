// Get references to the input and send icon (paper plane)
const inputBox = document.querySelector('.chatbox_input input');
const sendButton = document.querySelector('#send');

// Function to add message
function sendMessage() {
    const messageText = inputBox.value.trim();
    
    if (messageText) {
        // Create a new div for the message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'my_message');
        
        // Create the paragraph with message and timestamp
        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = `${messageText} <br><span>12:15</span>`;
        
        // Append the message paragraph to the new message div
        messageDiv.appendChild(messageParagraph);
        
        // Append the new message div to the chatbox
        document.querySelector('.chatBox').appendChild(messageDiv);
        
        // Clear the input box after sending
        inputBox.value = '';
    }
}

// Add event listener to the send icon
sendButton.addEventListener('click', sendMessage);

// Optional: Allow pressing Enter to send the message
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all the chat list items (blocks) on the left side
    const chatBlocks = document.querySelectorAll('.chatlist .block');
    const chatBox = document.querySelector('.chatBox');
    const headerUserName = document.querySelector('.rightSide .header .imgText h4'); // Right side header
    const headerUserStatus = document.querySelector('.rightSide .header .imgText span'); // Right side status
    const headerUserImage = document.querySelector('.rightSide .header .userimg img'); // Right side image

    // Data for each user's chat (including image and messages)
    const chatData = {
        'King': {
            image: 'assets/king.jfif', // Image for King
            messages: [
                { message: "Hi", time: "12.15" },
                { message: "Where are you girl?", time: "12.15" },
            ]
        },
        'Sharmi': {
            image: 'assets/messy.jfif', // Image for Sharmi
            messages: [
                { message: "Do you think it’s going to rain today?", time: "10.21" },
            ]
        },
        'Appa': {
            image: 'assets/download.jfif', // Image for Appa
            messages: [
                { message: "I'm working on a new project. It's a little stressful, but I’m excited.", time: "9.21" },
            ]
        },
        'Amma': {
            image: 'assets/teddy.jfif', // Image for Amma
            messages: [
                { message: "Have you seen the latest episode of that new show?", time: "12.51" },
            ]
        },
        'Roomate': {
            image: 'assets/woody.jfif', // Image for Roomate
            messages: [
                { message: "Any good movie recommendations?", time: "6.21" },
            ]
        },
        'Frd 1': {
            image: 'assets/burger.jfif', // Image for Frd 1
            messages: [
                { message: "hi.....", time: "7.21" },
            ]
        },
        'Frd 2': {
            image: 'assets/king.jfif', // Image for Frd 2
            messages: [
                { message: "Are you free?", time: "5.21" },
            ]
        },
        'Frd 3': {
            image: 'assets/flower.jfif', // Image for Frd 1
            messages: [
                { message: "I'm the one who ate your biscuit", time: "3.21" },
            ]
        },
        
        // Add more users as needed
    };

    // Function to display the chat when a user is clicked
    function displayChat(user) {
        // Clear the chatBox before adding new messages
        chatBox.innerHTML = '';

        // Get the user's data (name, image, and messages) from chatData
        const userData = chatData[user];

        // Update the right-side header with the selected user's name and status
        headerUserName.innerHTML = `${user} <br><span>Online</span>`; // You can adjust the status if needed
        headerUserStatus.innerHTML = "Online";  // You can change this logic to reflect real status if needed

        // Update the user's image on the right side header
        headerUserImage.src = userData.image; // Set the image to the user's profile image

        // Loop through the user's messages and display them in the chatBox
        userData.messages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'my_message');
            messageDiv.innerHTML = `<p>${message.message}<br><span>${message.time}</span></p>`;
            chatBox.appendChild(messageDiv);
        });
    }

    // Add click event listener to each chat list item (block)
    chatBlocks.forEach(block => {
        block.addEventListener('click', function () {
            // Get the user's name from the block's heading (e.g., 'King', 'Sharmi', etc.)
            const user = block.querySelector('.details h4').textContent.trim();
            displayChat(user);  // Call the displayChat function to show the user's messages
        });
    });
});


// JavaScript to filter chat list based on search input
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search_chat input'); // Get the search input element
    const chatBlocks = document.querySelectorAll('.chatlist .block'); // Get all chat blocks (users)

    // Add event listener for input on the search bar
    searchInput.addEventListener('input', function () {
        const searchQuery = searchInput.value.toLowerCase(); // Get the search query and convert it to lowercase

        chatBlocks.forEach(block => {
            const userName = block.querySelector('.details h4').textContent.toLowerCase(); // Get the user's name in lowercase

            // If the user's name matches the search query, show the block, otherwise hide it
            if (userName.includes(searchQuery)) {
                block.style.display = 'flex'; // Show matching block
            } else {
                block.style.display = 'none'; // Hide non-matching block
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const emojiButton = document.querySelector('.fa-face-smile');  // Emoji button (smiley icon)
    const emojiListContainer = document.createElement('div'); // Container for emojis
    const inputBox = document.querySelector('.chatbox_input input'); // Input box
    const emojiList = [
        "😊", "😂", "😢", "😎", "😍", "😘", "😜", "😅", "🤣", "😇", "😻", "🥰", "🤩"
    ];

    // Create emoji list and append to emojiListContainer
    emojiList.forEach(emoji => {
        const emojiItem = document.createElement('span');
        emojiItem.classList.add('emoji');
        emojiItem.textContent = emoji;
        emojiListContainer.appendChild(emojiItem);

        // Add event listener to insert emoji into input box
        emojiItem.addEventListener('click', function () {
            inputBox.value += emoji;  // Insert emoji into input box
        });
    });

    // Add styles to emoji list container
    emojiListContainer.style.position = 'absolute';
    emojiListContainer.style.backgroundColor = '#fff';
    emojiListContainer.style.border = '1px solid #ddd';
    emojiListContainer.style.borderRadius = '8px';
    emojiListContainer.style.padding = '10px';
    emojiListContainer.style.display = 'none';
    emojiListContainer.style.zIndex = '1000';
    emojiListContainer.style.maxHeight = '200px';
    emojiListContainer.style.overflowY = 'scroll';

    // Append emojiListContainer to body (or to a parent div if needed)
    document.body.appendChild(emojiListContainer);

    // Toggle emoji list visibility when emoji button is clicked
    emojiButton.addEventListener('click', function () {
        if (emojiListContainer.style.display === 'none' || emojiListContainer.style.display === '') {
            emojiListContainer.style.display = 'block';
        } else {
            emojiListContainer.style.display = 'none';
        }
    });

    // Optional: Hide the emoji list if the user clicks outside the emoji list or input box
    document.addEventListener('click', function (event) {
        if (!emojiButton.contains(event.target) && !emojiListContainer.contains(event.target) && event.target !== inputBox) {
            emojiListContainer.style.display = 'none';
        }
    });
});

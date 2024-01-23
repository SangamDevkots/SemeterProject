


document.addEventListener("DOMContentLoaded", function () {

    const booksData = [
        {
            image: "https://images-na.ssl-images-amazon.com/images/I/718ReYbwlFL.jpg",
            name: "After You",
            author: "by Jojo Myoes",
            rating: "1.987 rating",
            info: "Book Posted by Sangam Devkota"
        },
        {
            image: "https://images-na.ssl-images-amazon.com/images/I/91JxVjINNsL.jpg",
            name: "Big Magic",
            author: "by Elizabeth Gilbert",
            rating: "1.987 rating",
            info: "Book Posted by Sangam Devkota"
        },
        {
            image: "https://images-na.ssl-images-amazon.com/images/I/9129dzchsGL.jpg",
            name: "A Tale for the Time Being",
            author: "by Ruth Ozeki",
            rating: "1.987 rating",
            info: "Book Posted by Sangam Devkota"
        },
        {
            image: "https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg",
            name: "The Great Gatsby",
            author: "by F. Scott Fitzgerald",
            rating: "1.987 rating",
            info: "Book Posted by Sangam Devkota"
        }
    ];


    const bookContainer = document.getElementById("bookContainer");

  
    booksData.forEach(book => {
        const bookElement = createBookElement(book);
        bookContainer.appendChild(bookElement);
    });

    function createBookElement(bookData) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("books");

        const imgDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = bookData.image;
        img.alt = "Book Image";
        img.classList.add("book-img");
        imgDiv.appendChild(img);

        const descpDiv = document.createElement("div");
        descpDiv.classList.add("descp");

        const bookName = document.createElement("h2");
        bookName.classList.add("book-name");
        bookName.textContent = bookData.name;

        const author = document.createElement("h3");
        author.classList.add("author");
        author.textContent = bookData.author;

        const rating = document.createElement("h3");
        rating.classList.add("rating");
        rating.textContent = bookData.rating;

        const info = document.createElement("p");
        info.classList.add("info");
        info.textContent = bookData.info;

        const requestToBuyBtn = document.createElement("button");
        requestToBuyBtn.type = "submit";
        requestToBuyBtn.textContent = "Request to buy";

        const requestToExchangeBtn = document.createElement("a");
        requestToExchangeBtn.href = "Exchange.html";
        const exchangeBtn = document.createElement("button");
        exchangeBtn.type = "submit";
        exchangeBtn.textContent = "Request to Exchange";
        requestToExchangeBtn.appendChild(exchangeBtn);

        descpDiv.appendChild(bookName);
        descpDiv.appendChild(author);
        descpDiv.appendChild(rating);
        descpDiv.appendChild(info);
        descpDiv.appendChild(requestToBuyBtn);
        descpDiv.appendChild(requestToExchangeBtn);

        bookDiv.appendChild(imgDiv);
        bookDiv.appendChild(descpDiv);

        return bookDiv;
    }
});

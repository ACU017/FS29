# Front End Recruitment Test

### This project will be divided in three parts:

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note: `

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?

Most time I had a meeting with my mentor in the middle so I'm thinking of having another hour when I can tonight.

2. What would you add to your solution if you had more time?

I tried to add a single book page but I'm struggling with the react router.

3. Share a code snippet that you are proud of and explain what it does

  <!-- <div>
    <div id="trial-div mt-20">
      {books.map((book) => (
        <div>
          {
            <div className="card mb-20" style={{ width: "18rem" }}>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.author}
                </h6>
                <h3 className="card-title">{book.title}</h3>
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.pages} pages
                </h6>
                <img className="card-img" src={book.imageLink} />
                <a href="#" className="btn font-weight-bold">
                  READ MORE
                </a>
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  </div> -->

I'm really happy about this map because I get everything although I did something and broke bootstrap, so I could no longer use the library.

4. How would you track down a performance issue in production? Have you ever had to do this?

I would do some test in order to understand the possible issues, and working in a team I would ask a colleague to check for this issue.

Yes, I have a similar issue in my MVP where for the search I'm mapping through the whole db. I haven0t solved it yet.

# Comments

---

# Submission

After completing the challenge, commit it to Github.

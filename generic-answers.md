### Generics


1. We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a
JWT is issued and our web-application uses this token for every request for
authentication.
    
Here's an example of such a token:
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb21lb25lQGV4YW
    1wbGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgM
    zEgMjM6NTk6NTkgQ0VTVCAxOTY5In0.4bl2puoaRetNjO1GsweKOnnQsYgwNa9b
    QIC-WQZkuNo`

  Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might breaks it
  into multiple lines)

2. In our web-application, messages sent from one user to another, can contain HTML,
which poses some security risks. Describe two attack vectors bad actors might try to
abuse? And how would you mitigate these vectors?
3. Explain the difference between mutable and immutable objects.
    a. What is an example of an immutable object in JavaScript?
    b. What are the pros and cons of immutability?
    c. How can you achieve immutability in your own code?
4. If you would have to speed up the loading of our current web-application, how would you
do that? (no need to actually do it, just describe the steps you would take)
5. What part of a new job do you think is more important:
    a. Choose your own hardware, but work with a company supplied operating system
    image.
    b. You're offered a standard piece of mediocre hardware. Free to pick your own
    Software.
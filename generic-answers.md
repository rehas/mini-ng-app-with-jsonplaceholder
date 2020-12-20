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

## Answers:
1. JWT is safe to use once implemented carefully. Since JWT tokens contain information that is accessible it should be handled carefully. With this specific token there are 2 issues.
    - email address of the user is included in token. If user email address is a critical information that could be exploited, we should avoid including it in the token.
    - isAdmin information should also be excluded from the token, since it can potentially be a critical information for exploiters.  
2. HTML in messaging can be exploited as
    - one way of exploiting a message including HTML would be XSS attacks which requires one of the message composers to be the attacker. Sanitizing input fields, removing unknown scripts from html would mitigate this attack. 
    - Another way of exploting html messages would be switching the css to create a different display than the original intention. Modern email clients are patched against this type of attack, but if a web based client is being used developers should make sure that access to external resources are controlled. 
3. Mutable objects can be changed after creation while immutables can't be changed.
    1. Primitive types are immutable in javascript. 
    2. Immutability allows for a better envrionment for functional programming. Immutability creates memory and garbage collection overhead since every state change results in new memory allocation and garbage collection. Some data structures are either not possible or expensive to implement with immutable objects. 
    3. In javascript some native syntax like spread operators facilitate immutability, but still external libraries are also an option for implementing immutable structures. 
4. Performance of this web app can be improved via:
    1. Loading resources as delayed as possible
    2. Minimizing initial data transfer from server. 
    3. Splitting up, minimizing files to be loaded.
    4. Caching less dynamic files.
5. It depends on how much time is being spent during activities related to hardware performance vs software efficiency. If the tasks usually require high memory / cpu then I would opt for the best possible hardware in the market, and even if it comes with a standard image I wouldn't mind. Since if it makes sense to update the image, it's always possible (just takes a bit more time and effort). On the other hand, if the dev system is setup to be working on remote machines and not much is done on local environments, then I'd opt for being able to choose the software set with the team.  
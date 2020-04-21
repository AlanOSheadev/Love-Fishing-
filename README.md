# Fishing Marks with local Services Love Fishing Page
## Second Milestone Project February 2020:  - Code Institute.
### Responsive Design
![Responsive Design](https://raw.githubusercontent.com/AlanOSheadev/Love-Fishing-/master/assets/images/Iamresponsive.png "Responsive Design")
### UX
User Expectations
A customer visiting my site will want to get as much information as possible in a short space of time.  The person visiting the site wants to know what is on offer.  They are expecting to see a map which will provide them with some useful information about local fishing areas and information on where to stay etc. They will also expect a site that loads quickly with fast acting links. I have used the link from Github and asked people to give some feeback on the site.  Overall they found the site interesting and enjoyable.
### Strategy
My aim was to design a site that immediately captures the visitors attention and encourage them to scroll through the site.  The hero image was chosen to fire the imagination of a travelling fisherman/woman. This site is promoted by Rodfendr but I wanted to give the visitor free information and advice while Rodfendr is dispayed in the image I wanted a sublte promotion. I didn’t want to overload the visitor with long descriptions.
### Scope
The site is designed to promote Rodfendr the lightest fishing rod rest in the world. I am promoting Rodfendr through an information site which gives a visitor to Kerry some interestng and useful information in the infowindows that wil help them to make a decision to visit Kerry andenjoy some fishing, while realising that a small light travel rod restwould be ideal for their tacklebox.
### Structure
I immediately want the visitor to see the benefits of using Rodfendr, they can see me relaxing and using Rodfendr to protect my fishing rod. I want them to understand that Rodfendr is easy to bring on vacation.  The map shows some of Kerry's fine fishing marks the info window gives the angler a quick outline of the type of area it is and what type of bait to use etc.  The search menus provide information on local services which they might need.
### Skeleton
1. ![Landing Page wireframe](https://raw.githubusercontent.com/AlanOSheadev/Love-Fishing-/master/assets/images/index.png "Index wireframe")
2. ![Contact wireframe](https://raw.githubusercontent.com/AlanOSheadev/Love-Fishing-/master/assets/images/contact.png "Contact wireframe")
3. ![Privacy wireframe](https://raw.githubusercontent.com/AlanOSheadev/Love-Fishing-/master/assets/images/privacy.png "Privacy wireframe")
### Surface
The colors were chosen to contrast easily and make it easy to locate the links especially the “Buy now” link which has an extra orange icon.  The background colors and font colors were chosen to make it easy on the visitors eyes and I used photos and videos instead of a lot of sentences so as not to overload the visitor
### Technologies
1. HTML
2. CSS
3. Bootstrap
4. JQuery
5. Google Maps Library API
6. email.js

### Features
The Hero image of me relaxing while fishing with Rodfendr is designed to encouragethe visitor to think about a fishing trip. The map then shows them an outline of Kerry where better to go fishing with information on several famous maks to fish from. The drop down menues are simple and the info widows open on click.  The contact form is fully functional and is run using email.js. The "Buy Now" button was also added to the header and footer and the credit card icon was colored orange to attract the visitors eye so that they would be encouraged to press the button which takes them to our ecommerce check out.  The checkout is fully functioning and will safeyly process your order and you will receive your order asap.  The images and videos are designed to inform and entertain and to keep the page interesting.  The links to my main website www.Rodfendr.com are used to give the user a full ecommerce experience.  All the social media links arrive at Rodfendr owned pages.

### Features Left to Implement
I have really struggled with the project.  I wanted the menu drop downs to work better. Jasmine would have been a great way for me to test my code as I went along but, my lack of knowledge and having only really practiced it once with a guided tutorial and due to other constraints such as time  I decided to manually test everything.  I have reallly struggled to get the drop down menus to act as filters for the library to select information on behalf of the visitor. I spent a lot of time trying to get the interactivity that I wanted.  Every time I got close to the solution I would fail.  I tried very hard and at times I was comletely confused, the issue seems to be that when loading the hard cided markers and info windows that this was conflicting with the library.  I have not fully fixed this but I am out of time and I cannot continue without failing the project completely.  Anothuer issue is that the results box covers the navbar on small screens, again unfortunately i am out od time to fix this issue. I would like to add a cookie bar to make it a legal site.

I have fixed the issues described above and the map and search are now working as expected.
### Testing
Since I have strugged so much with the project every change I made was tested to see if I had achieved my goal. Unfortunatlely I was trying to change and test code so often that I got confused and frustrated on many occasions.  At the beginning of the project i had fully intended to use Jasmine to test my code as I went along.  I was soon aware that I was struggling with the API and the functionality too much to attempt to test using Jasmine, my skill and knowledge here is very limited. I may have under estimated the complexity of using an API for someone with limited experience.  When I designed the wireframe I thought it would be easier to execute. Extensive testing of the navbar buttons was made to ensure that each button would result in the correct response once clicked. On small screens the dropdown menu covers the footer unfortunately I'm out of time to fix this. The "Home", button will return the visitor to home from any other page and it will return you to the top of the landing page if clicked either in the header or footer. The Buy now button is placed in the header and the footer. In the header and footer the credit card icon is orange in color so as to attract the user to the button.  The buy now buttons will direct the user to a check out page for Rodfendr and this is the expected result. In the buttons act in the same way as in the header ie bringing the user to the correct page.  The privacy button is targeted at our privacy page where your legal rights to privacy are explained and functions as expected.  All the social media links were tested and bring the visitor to the various social media pages, in a separate targeted window, as was hoped for. All the buttons are targeted using 'target = "_blank". The contact us page is a bootstrap form and each field is marked as required, if the correct information is not put into the correct field an error message appears if the correct format is used to enter information then an email will be sent to me as is expected I am using email.js to send the emails. This site was tested across multiple browsers (Chrome, Safari, Microsoft Edge, FireFox) and on multiple mobile devices (iPhone 4, 5/SE,6,7,8 iPhone 6,7,8 plus, iPhone X : Chrome and Safari, iPad, iPad Pro,Samsung Galaxy Slll,5S) to ensure compatibility and responsiveness.
All links will open in a new tab using - 'target="_blank"'. All links have been manually tested to ensure that they are pointing to the correct destination. I used W3C validator validate all my HTML and CSS.

I have now fixed the project and the map works as expected and all links work as expected.

### Deployment
I used Github to host this website.  The site is automatically updated and all changes are logged once a commit has been made to the master branch.  Periodically throughout the development of the site changes and updates have been added using the git commit -m “” command. The landing page is called index.html, which is a required attribute to allow the site to deploy correctly.
## Credits
1. This site uses Bootstrap, fontawesome, hover, javascript, jQuery, Google Maps Library API and email.js. 
2. I used code I found on Google API tutorials in conjunctin with Codex turotials on multiple markers info windows. 
3. I used code from Rosie interactive project to make the contact page with email.js.
4. All my code has been taken from the previous projects I have taken part in as well as Bootstrap.
5. I have modified the code I used and added my own styling to suit the website. 
6. I have left uncomments throughout the code where I have used code not my own. 
7. I have used google fonts for the main fonts and font awesome for the icons.

### Content
All content on the site has been created by me or I have permission to use it.  
### Media
All photos are provided by me from the assets folder.
Acknowledgements
The navbars are bootstrap and the button code and image code were adapted from my previous project. 


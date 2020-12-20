# mini-ng-app-with-jsonplaceholder

- Created with stackblitz angular boilerplate 
- Rxjs branch contains the rxjs subject state implementation
- Master branch is without rxjs

- Master branch approach: 
    - Every single-post component manages it's showUser state individually. This was chosen to keep the state and the logic close. Since there's no shared state, this approach resulted in smaller components. 
- Rxjs state management approach:
    - On this branch I've decided to include the state in the Post object itself instead of leaving it to the component. This approach allowed me to simplify the service functionality. 
    - Since state is shared now, I've moved udpate state behavior to the service keeping in mind that maybe other components might also be interested in this in the future. 

- Overall this was fun to work on, it's been a while since creating an angular app from scratch so I've searched for some boiler plate and ended up in stackblitz.
- Css and overall design can be improved easily (or in other words, it's hard to make it any worse) 🖖


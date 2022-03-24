# Linktree Frontend Assessment Notes

## General Notes

1. All models have been defined using limited information from designs. Mock data is loaded via route resolvers for both user profile settings and links via two separate service calls. In practice, a single graphQl endpoint could allow for a single query to be made, or depending on the database model/endpoint created, a single api call could be to return the links and profile settings. Some local assets would also be loaded from api endpoint urls (ie. profile image) however the img is currently pointing to the assets file directly.

2. Font styles dictated by the designs were not available via google fonts. Used similar font family as a replacement.

3. There are a number of TODO's on desired features to be added. Including animation events, 404 routing redirects, and error handling from api responses. Given more time (and functional api's) these could be implemented.

4.  It is possible to componentize the links further (show link item and venue link item). A driving factor for this would be potential reusability and a slightly smaller list component template. This would also align with a more atomic design of starting with the lowest level component and working outwards. 

## TBC Feature Notes

1. Music Player
    - Media player is static and not currently functional. Future iterations would include either an embedded player from each platform, or a custom player that loads data based off a song url
2. Active link Expansion
    - Functionality is not included, however, a possible solution for design would be to create a singleton service at the profile component level which would store the active link id. When a link is clicked and expanded, the service would be updated to store the selected link. A property could be passed to each expandable link which would determine whether it should expand based on a matching selected link id.
3. Testing
    - "When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes" | Incomplete since functionality was not completed as previous note explains.
    - "When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes" | Was not completed due to time. However a similar method of testing as what is laid out in shows link component could be implemented, however instead of checking for visibility of all links, a css query for the element with the title would be performed searching for the Spotify text.
      

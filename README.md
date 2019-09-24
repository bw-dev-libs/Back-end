Dev-Libs

# Back-end
// What project does + screenshot of product in action
"Mad-Libs" for developers.  This app will allow users to complete "Dev-Libs" that can be posted to Twitter.  Imagine a "MadLib"-style script about a famous, well-regarded developer speaking at a conference - except this time, with your help, it goes terribly wrong: crazy startup ideas (selling flame-throwers online, perhaps?), misadventures in the life of a developer ("I almost died of smoke inhalation making that final git-commit/git-push"), troubles with merge conflicts (alias mywayorthehighway="git add -A && git commit -m 'fixed everything' && git push origin --all --force"), failing tests ("Chuck Norris can’t test for equality because he has no equal."), etc.

# Installation
-having a code block in your README that shows exactly what folks need to type into their shell to install your software; and
-doing this for all platforms that your software supports, if there’s a difference between them (e.g. OS X/Linux/Windows).

# Usage Example
-few useful and motivating examples. Again you’d lay out exactly what people need to type into their shell or click in the UI to get the examples working.

ENDPOINTS:
Register endpoint: 
/api/auth/register
{
    "username": "userOne",
    "password": "password"
}

Login endpoint:
/api/auth/login
{
    "username": "userOne",
    "password": "password"
}

User endpoints:
/api/users
/api/users/:id
/api/users/:id/templates

Template endpoints:
/api/templates
/api/templates/:id


// How to set up Dev environment
-installing all development dependencies; and
-running an automated test suite of some kind.
- Having at least a basic test suite is important because it lets developers confirm that they’ve got their development environment set up correctly. Nothing more frustrating than wanting to play around with a cool project and being unable to build it!


// How to ship a change
-This should include a quick description of the general development process for the project. For example, do you accept pull-requests or want patches via email and so on.
-Also, it helps to give instructions on how to build and release a new version of the software. Even if this is not something that all contributors will have to do at some point, it helps immensely to provide these instructions for the person doing the releases (i.e. often yourself).


// Change log
-Users of your project want to know what changes were made compared to the last version. I know that GitHub has the “Releases” tool for this but I still like having a condensed change log in the README. I usually just make a bullet list with a bullet for each release and the key changes made in that release.


// License and Author info
-contact information for the author (I like Twitter and email); and
-a quick statement about the license the software is under. I usually do this by saying “XYZ is available under the $SoAndSo license. See LICENSE.txt for more information”. If you’re extra nice you can put a link to the license file.



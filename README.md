mobileremote
============

This is a mobile remote controller app for my home network. Others are free to use what I have developed.

So far it includes only support for a specific host definied in the alloy.js

This works off of a module ( commonJS methodology )
I wrote a TCP handler for the ISCP. The app will try to keep the connection open, if it is closed upon pushing a command it will try to connect to it again.







The ISCP code is heavily based upon internet resources:

Header / sample code
https://sites.google.com/a/webarts.ca/toms-blog/Blog/new-blog-items/javaeiscp-integraserialcontrolprotocol
Working knowledge and xls files of commands
http://www.avsforum.com/t/1347463/onkyo-iscp-commands
Compared against
https://github.com/miracle2k/onkyo-eiscp

The initial commit has references to icon sets from:

WPZOOM, wpzoom.com https://www.iconfinder.com/search/?q=iconset:wpzoom-developer-icon-set
feather, Cole Bemis https://www.iconfinder.com/search/?q=iconset%3Afeather
Ionicons - http://ionicons.com/ - https://www.iconfinder.com/icons/211651/close_round_icon#size=32


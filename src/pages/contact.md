---
title: Contact

thumbnail:
  url: /assets/images/Pusheen_Zoom_Background_Campfire_2020.jpg
  alt: a pic
  classes: feature test asodhioas
---
{% container %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<form name="contact" method="POST" data-netlify="true">
  <p><label for="name">Name</label>
    <input type="text" name="name" id="name"></p>
  <p><label for="url">Url</label>
    <input type="text" name="url" id="url"></p>
  <p><label for="email">Email</label>
    <input type="email" name="email" id="email"></p>
  <p><label for="message">Message</label>
    <textarea name="message" rows="8" cols="40" id="message"></textarea></p>
  <p class="checkbox"><input type="checkbox" name="subscribe" id="subscribe"><label for="subscribe">Subscribe</label></p>
  <p><input type="submit" name="submit" value="Send" class="btn"></p>
</form>
{% endcontainer %}

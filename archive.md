---
layout: page
title: Archive
published: true
---

<h2 style='color:#ac4142'>ALL BLOG POSTS</h2>
<ul class="posts" >
      {% for post in site.posts %}
      <li style='color:#ac4142'><span> {{ post.date | date_to_string }}</span> <a style='color:#3498DB' href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
   </ul>
<hr>

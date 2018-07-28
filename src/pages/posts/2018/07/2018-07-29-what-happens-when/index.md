---
path: "/posts/2018/07/what-happens-when"
date: 2018-07-29
title: "What happens when you type an URL in the browser and press enter?"
author: "Leo"
thumbnail: "./thumbnail.jpg"
published: true
type: "post"
categories: ['Beginner Series']
tags: ['HTTP', 'TCP']
excerpt: "In this post I’ll try to answer the age-old interview question."
---

This post will mainly focus on the stuff between client and server, if you're interested in the physical layer, please checkout [what happens when](https://github.com/alex/what-happens-when).

Here is a quick preview of the topics.
- [Parse URL](#parse-url)
- [DNS lookup](#dns-lookup)
- [TCP handshake](#tcp-handshake)
- [HTTP process](#http-process)
- [Rendering the page](#rendering-the-page)
- [Conclusion](#conclusion)
- [Resources](#resources)

## Parse URL

If we type `dezineleo.com` into Chrome's address bar. Chrome will parse the URL. Actually the Chrome might immediately invoke the auto-complete function once you press the key *d*. As mentioned before, I'll not cover all the stuff.

The Chrome will identify the application layer protocols like HTTP/HTTPS and the resource location. In this example, the protocal is `HTTP`, and the resouce location is `"/"`. Which also can explain what the **Uniform Resource Locator** means.

## DNS lookup

Before making a request to the [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) server, the Chrome might check the [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) list firstly.

**1. Browser cache**

Then Chrome is going to check if the `dezineleo.com` is in its cache. Go to `chrome://net-internals/#dns` to checkout your DNS cache.

**2. OS cache**

If not found, Chrome will call your OS to checkout `hosts` file which contains host name configurations.

**3. Router cache**

Still not found, then it's router's turn to check its cache.

**4. ISP cache**

All failed? Then your OS will make a request to DNS server until the IP address we need is found. And during this lookup, the DNS server might follow [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) to find the target IP's MAC address.

If the local/ISP DNS server does not have it, then a recursive search is requested as the search will continue repeatedly from DNS server to DNS server until it either finds the IP address we need or returns an error response saying it is unable to find it.

## TCP handshake

> Before transfering data packets between your computer(client) and the server, a TCP connection shoule be established firstly. And the process called the TCP/IP three-way handshake.

Once we get the IP address, the Chrome will take that and the given port number from the URL (the HTTP protocol default port is 80, and HTTPS is 443) to call `socket` function in order to request a TCP connection stream. There are a number of different internet protocols out there but TCP is the most common protocol used for HTTP requests.

If the server is ready to be conneted which means it's listening the port, then things happen like the below.

1. Client chooses an initial sequence number (ISN) and sends a packet with `SYN=1` to the server.
2. Here I assume the client ISN is *x* and the server receives the request correctly. Then, Server responds with `ACK=1`, `ack=x+1` and `SYN=1` which indicates the server is acknowledging receipt of the first packet. Also, the server will choose an ISN. Here we assume it is *y*.
3. Client sends the server with a new packet with `ACK=1`, `ack=y+1` and `SYN=1` to confirm this connection.

Note: *ack* means acknowledge number.

What if you want to close this connection? I'll go through this briefly. If you want to know more about that, checkout [TCP - 4 way handshake](https://stackoverflow.com/questions/46212623/why-tcp-connect-termination-need-4-way-handshake)

To close the connection, client sends a packet with `FIN=1` to the server. Then server responds with ACK and its own FIN. Finally, client sends ACK to confirm the disconnection.

P.S. [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) might be a trending topic.

## HTTP process

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), well, here the protocol version I'm going to talk about is `HTTP/1.1`.

Now it's time to transfer the data. Since our URL is `dezineleo.com`, Chrome will send a `GET` request asking for web page. And then the server handles the request and sends back a reponse. The server response contains the web page you requested as well as the status code, compression type (Content-Encoding), how to cache the page (Cache-Control), any cookies to set, privacy information, etc.

Here is a list of the **status code**.

* 1xx indicates an informational message only

* 2xx indicates success of some kind

* 3xx redirects the client to another URL

* 4xx indicates an error on the client’s part

* 5xx indicates an error on the server’s part

## Rendering the page

Woo, finally, we're going to see the page.

First, the rendering engine is going to parse the HTML markup into a parse tree, a.k.a DOM tree. Then it will check the HTML tags and sends out GET requests for additional elements on the web page, such as images, CSS stylesheets, JavaScript files etc. 

Secondly, it starts to parse the CSS files, `<style>` tag contents, and style attribute values.

Finally, through sophisticated calculations by CPU/GPU, my site is right on your screen.

## Conclusion

Although it only takes a few seconds to render a web page, the behind scenes is not that simple. Thanks to the Internet, we're always connected. Now can you answer the question “What happens when you type an URL in the browser and press enter?”.

## Resources
1. [What happens when...](https://github.com/alex/what-happens-when)
2. [TCP - 4 way handshake](https://stackoverflow.com/questions/46212623/why-tcp-connect-termination-need-4-way-handshake)
3. [What happens when you type an URL in the browser and press enter](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
4. [How browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)




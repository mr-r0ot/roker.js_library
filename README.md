# roker.JS Library
Hello! We're here to make coding easier! We are here for a brighter future! Encryption, decryption, sending packets and requests, on-the-fly UI changes, client-side and server-side attacks, client-side storage (db), getting user information and many more features easily!


# Import To Html Project (Replace the version you want to use with 3.3.3!)
```
<script src="https://raw.githubusercontent.com/mr-r0ot/roker.js_library/main/roker3.3.3/roker.js"></script>
```


# Encodeing And DEcodeing With Roker.js
```
MD5:
  CryptoJS.MD5('text')  //Encodeing With MD5 Hash


base58:
  $encode_base58('text')  //Encodeing With BASE58
  $decode_base58('text encoded')  //Decodeing With BASE58


base85:
  $encode_base85('text')  //Encodeing With BASE85
  $decode_base85('text encoded')  //Decodeing With BASE85


base16:
  $encode_base16('text')  //Encodeing With BASE16
  $decode_base16('text encoded')  //Decodeing With BASE16


base32:
  $encode_base32('text')  //Encodeing With BASE32
  $decode_base32('text encoded')  //Decodeing With BASE32


base64++:
  $encode_base58('text', key=5)  //Encodeing With BASE64 (Your Can Encodeing Text With A KEY And Decodeing With It KEY)
  $decode_base58('text encoded', key=5)  //Decodeing With BASE64 (Your Can Encodeing Text With A KEY And Decodeing With It KEY)
  $crack_key_base64('text encoded')  //Cracking And Hacking Key A Encode Text !
  $compile_base64('js code encode with base64', key=5)  //Compile Encoded JS Code


```






# clintDB (Save Info In Database On System User)
```

$clintDB_add_data(name, data)  //Add A Data To Database
$clintDB_get_data(name)  //Get Data By Name From Database
$clintDB_remove_data(name)  //Remove A Data From Database
$clintDB_clear_all_data()  //Clear All Data Database
$clintDB_datas()  //Show All Data Database

// Your Can Encodeing Data And Save In db
$clintDB_add_data('username', $encode_base85('taha'))

// Your Can Clear Data And Save In db
$clintDB_add_data('username', $inti_injection(' <script>alert("Bad Code!!!")</script> '))  //---> username: scriptalertbadcodescript
```




# $is_new_user (Is the user visiting the site for the first time?)
```
$is_new_user() //true
$is_new_user() //false
```




# $anti_copy() (The ability to copy, right-click, restricts access to some information!)
```
$anti_copy()  //ok
```



# $anti_injectio(data)  (It cleans the information and neutralizes malicious codes and prevents code injection and hacking of your site!)
```
// Your Site Hacked!!!!!! :(
var text=" <script>alert('Code Injection <XSS>')</script> ";
document.write(text)


// Your site is smiling! :)
var text=" <script>alert('Code Injection <XSS>')</script> ";
document.write($anti_injection(text));
```



# Data conversion
```
$int(data)
$str(data)
$float(data)
```


# Search With Roker
```
var query='Roker.js Library'
$search_google(query)
$search_github(query)
```


# Clear Screen And Console
```
$clear_screen()  //Cleared Your Site Screen
$clear_screen('<p> Cleared </p>')  //Cleared Your Site Screen And Printed Code

$clear_console()  ///Cleared Console
```


# Play Audio
```
$play_audio(' Audio URL ')
```


# Reload Page
```
$reload()
```


# Open URL
```
$go_url(url) //Go To A Url
$open_url(url)  //Open URL In New TB
$open_url_window(url, toolbar='yes', width='600', height='500', directories='yes', menubar='yes', scrollbars='yes') //OPen URl In New Windows
```


# Boxs
```
$show_box(message)  //Show A Message
$confirm_box(message)  //Select YES Or NO
$ask_box(header='title message' ,message='dft message')  //Input Message
```


# Send Requests
```
Send Request Post:
  $request_post(url,data=null)

Send Requests Get:
  $request_get(url, callback)
```





# Attack To Clint (Do not test on your own system only for legal attacks!)
```
1-  $attack_encode()  //Attack CPU Ecncodeing
2-  $attack_open_pages(document.URL)  //Attack Opening Very TB
3-  $attack_print_console()  //Attack Console Pyload Log
4-  $attack_proc()  //Attack OPEN_PROS
```






# Browser Info
```
Get LOcation:
  $browser_get_location()

Get battery:
  $browser_get_battery()

Get IP:
  $browser_get_ip(callback)
  Test:
    $browser_get_ip(function(ip){alert('Your IP: '+ip)} )

Info_from_ip:
  $get_location_from_ip
  Test:
    $get_location_from_ip('8.8.8.8',function(info){alert(info)}

Get battery:
  $browser_platform()

Get userAgent:
  $browser_userAgent()

Get cpu_info:
  $browser_cpu_info()

Get language:
  $browser_language()

Screnn Size:
  $get_screen_height()
  $get_screen_width()

$browser_name()
$browser_buildID()
$browser_version()
$browser_onlion()
$browser_mode()
$browser_javaEnabled()
$browser_cookieEnabled()
$browser_is_webdriver()
$browser_pdfViewerEnabled()
$browser_number_plugins_installed()
$browser_devices()


```





# CK access
```
$access_open_page()  //false
$access_clear_console()  //true
```


# $get_url_query(q)
```
https://YOURSITE.com?name=taha
$get_url_query('name=')  //taha
```




# GET Code
```
// get data a htm
$get_text_by_id(id)
$get_text_by_tag(tag)
$get_text_by_class(class_name)

$get_html_by_id(id)
$get_html_by_tag(tag)
$get_html_by_class(class_name)

$get_src_by_id(id)
$get_src_by_tag(tag)
$get_src_by_class(class_name)

$get_hidden_by_id(id)
$get_hidden_by_tag(tag)
$get_hidden_by_class(class_name)

$get_show_by_id(id)
$get_show_by_tag(tag)
$get_show_by_class(class_name)


$get_baseURI()
$get_cookie()
$get_site_type()
$get_domain()
$get_domConfig()
$get_lastModified()
$get_readyState()
$get_referrer()
$get_siteURL()
$get_hostname()
$get_protocol()
$get_data()
$get_title()
$get_body()
$get_html()
$get_embeds()
$get_forms()
$get_head()
$get_images()
$get_links()
$get_scripts()
```


# SET Code
```
$set_text_by_id(id, text)
$set_text_by_tag(tag, text)
$set_text_by_class(class_name, text)


SITE:
  $set_title(title)
  $set_cookie(cookie)
  $set_body_background_color(color)
```


# Click
```
$click_text_by_id(id, text)
$click_text_by_tag(tag, text)
$click_text_by_class(class_name, text)
```

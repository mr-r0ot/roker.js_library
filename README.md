# roker.JS Library
Hello! We're here to make coding easier! We are here for a brighter future! Encryption, decryption, sending packets and requests, on-the-fly UI changes, client-side and server-side attacks, client-side storage (db), getting user information and many more features easily!


# Import To Html Project (Replace the version you want to use with 3.3.3!)
```
<script src="https://mr-r0ot.github.io/roker.js_library/roker3.3.3/roker.js"></script>
```


# Running Python Code On Your JS Codes
```
//For Installing Python Compiler
$install_python();


//For Running Python Code
$run_python('YOUR_PYTHON_CODE')

// ||
// ||
// \/

$run_python('print("hello world!")')
//Or
$run_python('exec(input("Enter Python Code: ))')
```







# Importing Script Or Css With Roker
```
$import_script('PATH_OR_URL_YOUR_SCRIPT');
$import_style('PATH_OR_URL_YOUR_STYLE');
```






# Security
```
ANTI functions:
  Anti Robots:
    //roker uses various methods such as captcha, browser check, connection and IP check, platform, etc. to identify and block them.
    $is_robot();

  Anti Click From Site:
    //It prevents the user from right clicking on the site.
    $anti_click();

  Anti Injection Code:
    $anti_injection('INPUTING_USER');

  Anti Copy From Site:
    $anti_copy(text='is a text for copying after copying a text');
    $anti_copy(code='Your Codes');

  Anti Connect By HTTP:
    $anti_http('YOUR_JS_CODE');
    $anti_http('$go_url("403.html")');

  Anti Running On User System(LocalHost):
    $anti_run_on_system('YOUR_JS_CODE');
    $anti_run_on_system('$go_url("403.html")');





ONLY functions:
  Only WEb:
    //Only those who visit the website through a safe browser are allowed to enter.
    $only_web('YOUR_JS_CODE');
    $only_web('$go_url("403.html")');

  Only HTTP:
    //Only those who visit the website via http are allowed to enter.
    $only_http('YOUR_JS_CODE');
    $only_http('$go_url("403.html")');

  Only HTTPS:
    //Only those who visit the website via https are allowed to enter.
    $only_https('YOUR_JS_CODE');
    $only_https('$go_url("403.html")');

  Only file(LOCAL):
    //Only those who visit the website via file(LOCAL) are allowed to enter.
    $only_file('YOUR_JS_CODE');
    $only_file('$go_url("403.html")');

  Only platform:
    //You can specify that only the platforms you want can visit your site.
    $only_platform('YOUR_JS_CODE', 'android');
    $only_platform('$go_url("403.html")', 'windows');

  Only browser:
    //You can specify that only the browsers you want can visit your site.
    $only_browser('YOUR_JS_CODE', 'firefox');
    $only_browser('$go_url("403.html")', 'chrome');

  Only ip:
    //You can specify that only the IPs you want can visit your site.
    $only_ip('YOUR_JS_CODE', '127.0.0.1');
    $only_ip('$go_url("403.html")', '43.764.64.7');

  Only only_onlion:
    //You can specify that only users who are online at all can visit your site
    $only_only_onlion('YOUR_JS_CODE');
    $only_only_onlion('$go_url("403.html")');

  Only cookie_is_on:
    //You can specify that only users who have cookies enabled in their browsers can visit your website.
    $only_cookie_is_on('YOUR_JS_CODE');
    $only_cookie_is_on('$go_url("403.html")');

  Only java_is_on:
    //You can specify that only users who have run java enabled in their browsers can visit your website.
    $only_java_is_on('YOUR_JS_CODE');
    $only_java_is_on('$go_url("403.html")');





BLOCK:
  Block a IP:
    //You can block the desired IPs and prevent them from accessing the site.
    $block_ip('YOUR_JS_CODE', '127.0.0.1');
    $block_ip('$go_url("403.html")', '0.0.0.0');

  Block a platform:
    //You can block the desired platforms and prevent them from accessing the site.
    $block_platform('YOUR_JS_CODE', 'android');
    $block_platform('$go_url("403.html")', 'linux');

  Block a browser:
    //You can block the desired browsers and prevent them from accessing the site.
    $block_browser('YOUR_JS_CODE', 'firefox');
    $block_browser('$go_url("403.html")', 'anonymous');


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
  $encode_base64('text', key=5)  //Encodeing With BASE64 (Your Can Encodeing Text With A KEY And Decodeing With It KEY)
  $decode_base64('text encoded', key=5)  //Decodeing With BASE64 (Your Can Encodeing Text With A KEY And Decodeing With It KEY)
  $crack_key_base64('text encoded')  //Cracking And Hacking Key A Encode Text !
  $compile_base64('js code encode with base64', key=5)  //Compile Encoded JS Code


binary:
  $encode_binary('text') //Encodeing text to binary
  $decode_binary('encoded text')


AES:
  $encode_AES('text') //Encodeing text to binary
  $decode_AES('encoded text')


Serpent:
  $encode_Serpent('text') //Encodeing text to binary
  $decode_Serpent('encoded text')


Twofish:
  $encode_Twofish('text') //Encodeing text to binary
  $decode_Twofish('encoded text')


Skipjack:
  $encode_Skipjack('text') //Encodeing text to binary
  $decode_Skipjack('encoded text')


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



# Datas
```
Data conversion:
  $int(data)
  $str(data)
  $float(data)


Text management:
  $lower('HEEllo') //Output: heello
  $upper('he') //Output: HE
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

# Create Telegram Robots
```
Send Telegram Message To A ChatID:
  $telegram_sendMessage(botToken, chatId, message)
  //OR
  $telegram_sendMessage_post(botToken, userId, text)


Send Document To A ChatID:
  $telegram_sendDocument(botToken, chatId, path_file)

Get Info A User With UserID:
  $telegram_getUserInfo(botToken,userId)


========** Telegram Robot Compiler **========
  $telegram_compile(botToken, messageList, run=false, log=true);


EXM:
const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const messageList =[
  {
    text: '/start',
    code: "$telegram_sendMessage('[//TOKEN//]', '[//USERID//]', 'hello [//TEXT//] Welcom!')"
  }
]

async function mn_app(){
  await $telegram_compile(botToken, messageList, run=true, log=true);
}
setInterval(function mn_app, 1000);

==========================================

```




# random
```
Create Random Word:
  $random_word(letters, number);
  Exam:
    $random_word('abcdefjhigklmnopqrstuvwxyz0123456789',8);


Create Random Number
  $random_number(min, max);
  Exam:
    $random_number(5, 801) //Output: 56
```



# figlet
```
$figlet_base(inputText);

Exam:
  $figlet_base('Roker Lib');
// Output
" _____     ____    _   __  ______   _____            _        _____   ______   
|  __ \\   / __ \\  | | / / |  ____| |  __ \\       | |      |_   _| |  ____|  
| |__) > | |  | | | |/ /  | |__    | |__) >         | |        | |   | |__     
|  _  <  | |  | | |   <   |  __|   |  _  <          | |       _| |_  |___ \\    
| |_) > | |__| | | |\\ \\  | |____  | |_) >         | |____  |_____|  ____/ /   
|____/   \\____/  |_| \\_\\ |______| |____/          |______|         |_____/    

```


# UI
```
$UI_Create(code,type='p')


//Your Can Create UI Elements With Down Code
$UI_Create(code)

Exam:
  $UI_Create('<script>alert("Is $UI_Create !");</script>'); //run js
  $UI_Create('<h1>Is $UI_Create !</h1>'); //run html
  $UI_Create('<style>h1{color:green}</style>'); //run css
```



# take picture camer
```
$take_picture_camera()
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

Get Requests:
  $request_get(url, callback)

Get Requests Plus:
  $request_get_plus(url)

Send Packet For Openning Url:
  $request_get_openurl(url)



Send Packet:
  $send_packet_to(path, data_value, data_id, data_name, submit_id)

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

$set_hidden_by_id(id)
$set_hidden_by_tag(tag)
$set_hidden_by_class(class_name)

$set_show_by_id(id)
$set_show_by_tag(tag)
$set_show_by_class(class_name)


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

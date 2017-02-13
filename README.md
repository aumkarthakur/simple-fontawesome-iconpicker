simple-fontawesome-iconpicker
========================

I wanted a simple fontawesome iconpicker for my [wordpress theme] (http://www.howlthemes.com), so I created this plugin.

**Live Demo:** http://jsfiddle.net/Aumkar/28eth61x/2/embedded/result/

## How to use

**Step 1**: Add jQuery and fontawesome files to webpage.

**Step 2**: Add `simple-iconpicker.min.js` and `simple-iconpicker.css` file above `</head>` tag

```
<link href="simple-iconpicker.min.css" rel='stylesheet' type='text/css' />
<script src="simple-iconpicker.min.js" type='text/javascript'></script>
```
**Step 3**: Now add following script above `</head>`, and replace `.selector` with inputbox class.

```
iconpickerbox(); // This Function Prepend Iconpicker Box to body
$('.selector').iconpicker(".selector");
```

## Change log

In version 2.0, I've improved the efficiency of the code & improved performance by not appending icon picker box after each input box, instead now I'm prepending only one iconpicker box to body and when user click on input a that iconpicker pop outs.

Special Thanks to **DEEPAK KAMAT**

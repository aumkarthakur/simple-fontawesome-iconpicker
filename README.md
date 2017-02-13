simple-fontawesome-iconpicker
========================

I wanted a simple fontawesome iconpicker for my [wordpress theme] (http://www.howlthemes.com), so I created this plugin.

**Live Demo:** http://jsfiddle.net/Aumkar/28eth61x/1/embedded/result/

## How to use

**Step 1**: Add jQuery and fontawesome files to webpage.

**Step 2**: Add `simple-iconpicker.min.js` and `simple-iconpicker.css` file above `</head>` tag

```
<link href="simple-iconpicker.min.css" rel='stylesheet' type='text/css' />
<script src="simple-iconpicker.min.js" type='text/javascript'></script>
```
**Step 3**: Now add following script above `</head>`, and replace `.selector` with inputbox class.

```
$('.selector').iconpicker(".selector");
```

## Change log


v2.0
 - Improved the efficiency & performance of the plugin by using one single icon picker box instead of individual boxes for each inputs. 
 - Updated FontAwesome to 4.7.0 (more icons!)
 - Some code optimizations

Special Thanks to **DEEPAK KAMAT**

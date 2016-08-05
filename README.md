simple-fontawesome-iconpicker
========================

I wanted a simple fontawesome iconpicker for my [wordpress theme] (http://www.howlthemes.com), so I created this plugin.

## How to use

**Step 1**: Add jQuery and fontawesome files to webpage.

**Step 2**: Add `simple-iconpicker.js` and `simple-iconpicker.css` file above `</head>` tag

```
<link href="simple-iconpicker.css" rel='stylesheet' type='text/css' />
<script src="simple-iconpicker.js" type='text/javascript'></script>
```
**Step 3**: Now add following script above `</head>`, and replace `.selector` with inputbox class.

```
$('.selector').iconpicker(".selector");
```

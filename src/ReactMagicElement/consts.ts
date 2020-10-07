export const gridKeys: string[] = ('col,xs,sm,md,lg,xl,xxl').split(',')
export const gridValues: string[] = ('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24').split(',')
export const fontSizes: string[] = ('9,10,11,12,13,14,15,16,17,18,24,32,48,64,72').split(',')
export const boxSize: string[] = ('mini,small,medium,big,large,huge').split(',')
export const direction: string[] = ('top,right,bottom,left,horizontal,vertical').split(',')
export const zeroToThirty: string[] = ('0,5,10,15,20,25,30').split(',') // padding, margin default values
export const oneToFour: string[] = ('1,2,3,4').split(',')
export const elements: string[] = ('input,h1,h2,h3,h4,h5,h6,p,nav,label,header,footer,button,a,ul,ol,li,span,section,address').split(',')
export const htmlAttributes: string[] = ('' +
  // https://www.w3schools.com/tags/ref_attributes.asp
  'accept,' +                 //	<input>
  'accept-charset,' +         //	<form>
  'accesskey,' +              //	Global Attributes
  'action,' +                 //	<form>
  'align,' +                  //	Not supported in HTML 5.
  'alt,' +                    //	<area>, <img>, <input>
  'async,' +                  //	<script>
  'autocomplete,' +           //	<form>, <input>
  'autofocus,' +              //	<button>, <input>, <select>, <textarea>
  'autoplay,' +               //	<audio>, <video>
  'bgcolor,' +                //	Not supported in HTML 5.
  'border,' +                 //	Not supported in HTML 5.
  'charset,' +                //	<meta>, <script>
  'checked,' +                //	<input>
  'cite,' +                   //	<blockquote>, <del>, <ins>, <q>
  'class,' +                  //	Global Attributes
  'color,' +                  //	Not supported in HTML 5.
  'cols,' +                   //	<textarea>
  'colspan,' +                //	<td>, <th>
  'content,' +                //	<meta>
  'contenteditable,' +        //	Global Attributes
  'controls,' +               //	<audio>, <video>
  'coords,' +                 //	<area>
  'data,' +                   //	<object>
  'data-,' +                  //*	Global Attributes
  'datetime,' +               //	<del>, <ins>, <time>
  'default,' +                //	<track>
  'defer,' +                  //	<script>
  'dir,' +                    //	Global Attributes
  'dirname,' +                //	<input>, <textarea>
  'disabled,' +               //	<button>, <fieldset>, <input>, <optgroup>, <option>, <select>, <textarea>
  'download,' +               //	<a>, <area>
  'draggable,' +              //	Global Attributes
  'enctype,' +                //	<form>
  'for,' +                    //	<label>, <output>
  'form,' +                   //	<button>, <fieldset>, <input>, <label>, <meter>, <object>, <output>, <select>, <textarea>
  'formaction,' +             //	<button>, <input>
  'headers,' +                //	<td>, <th>
  'height,' +                 //	<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
  'hidden,' +                 //	Global Attributes
  'high,' +                   //	<meter>
  'href,' +                   //	<a>, <area>, <base>, <link>
  'hreflang,' +               //	<a>, <area>, <link>
  'http-equiv,' +             //	<meta>
  'id,' +                     //	Global Attributes
  'ismap,' +                  //	<img>
  'kind,' +                   //	<track>
  'label,' +                  //	<track>, <option>, <optgroup>
  'lang,' +                   //	Global Attributes
  'list,' +                   //	<input>
  'loop,' +                   //	<audio>, <video>
  'low,' +                    //	<meter>
  'max,' +                    //	<input>, <meter>, <progress>
  'maxlength,' +              //	<input>, <textarea>
  'media,' +                  //	<a>, <area>, <link>, <source>, <style>
  'method,' +                 //	<form>
  'min,' +                    //	<input>, <meter>
  'multiple,' +               //	<input>, <select>
  'muted,' +                  //	<video>, <audio>
  'name,' +                   //	<button>, <fieldset>, <form>, <iframe>, <input>, <map>, <meta>, <object>, <output>, <param>,
                              // <select>, <textarea>
  'novalidate,' +             //	<form>
  'onabort,' +                //	<audio>, <embed>, <img>, <object>, <video>
  'onafterprint,' +           //	<body>
  'onbeforeprint,' +          //	<body>
  'onbeforeunload,' +         //	<body>
  'onblur,' +                 //	All visible elements.
  'oncanplay,' +              //	<audio>, <embed>, <object>, <video>
  'oncanplaythrough,' +       //	<audio>, <video>
  'onchange,' +               //	All visible elements.
  'onclick,' +                //	All visible elements.
  'oncontextmenu,' +          //	All visible elements.
  'oncopy,' +                 //	All visible elements.
  'oncuechange,' +            //	<track>
  'oncut,' +                  //	All visible elements.
  'ondblclick,' +             //	All visible elements.
  'ondrag,' +                 //	All visible elements.
  'ondragend,' +              //	All visible elements.
  'ondragenter,' +            //	All visible elements.
  'ondragleave,' +            //	All visible elements.
  'ondragover,' +             //	All visible elements.
  'ondragstart,' +            //	All visible elements.
  'ondrop,' +                 //	All visible elements.
  'ondurationchange,' +       //	<audio>, <video>
  'onemptied,' +              //	<audio>, <video>
  'onended,' +                //	<audio>, <video>
  'onerror,' +                //	<audio>, <body>, <embed>, <img>, <object>, <script>, <style>, <video>
  'onfocus,' +                //	All visible elements.
  'onhashchange,' +           //	<body>
  'oninput,' +                //	All visible elements.
  'oninvalid,' +              //	All visible elements.
  'onkeydown,' +              //	All visible elements.
  'onkeypress,' +             //	All visible elements.
  'onkeyup,' +                //	All visible elements.
  'onload,' +                 //	<body>, <iframe>, <img>, <input>, <link>, <script>, <style>
  'onloadeddata,' +           //	<audio>, <video>
  'onloadedmetadata,' +       //	<audio>, <video>
  'onloadstart,' +            //	<audio>, <video>
  'onmousedown,' +            //	All visible elements.
  'onmousemove,' +            //	All visible elements.
  'onmouseout,' +             //	All visible elements.
  'onmouseover,' +            //	All visible elements.
  'onmouseup,' +              //	All visible elements.
  'onmousewheel,' +           //	All visible elements.
  'onoffline,' +              //	<body>
  'ononline,' +               //	<body>
  'onpagehide,' +             //	<body>
  'onpageshow,' +             //	<body>
  'onpaste,' +                //	All visible elements.
  'onpause,' +                //	<audio>, <video>
  'onplay,' +                 //	<audio>, <video>
  'onplaying,' +              //	<audio>, <video>
  'onpopstate,' +             //	<body>
  'onprogress,' +             //	<audio>, <video>
  'onratechange,' +           //	<audio>, <video>
  'onreset,' +                //	<form>
  'onresize,' +               //	<body>
  'onscroll,' +               //	All visible elements.
  'onsearch,' +               //	<input>
  'onseeked,' +               //	<audio>, <video>
  'onseeking,' +              //	<audio>, <video>
  'onselect,' +               //	All visible elements.
  'onstalled,' +              //	<audio>, <video>
  'onstorage,' +              //	<body>
  'onsubmit,' +               //	<form>
  'onsuspend,' +              //	<audio>, <video>
  'ontimeupdate,' +           //	<audio>, <video>
  'ontoggle,' +               //	<details>
  'onunload,' +               //	<body>
  'onvolumechange,' +         //	<audio>, <video>
  'onwaiting,' +              //	<audio>, <video>
  'onwheel,' +                //	All visible elements.
  'open,' +                   //	<details>
  'optimum,' +                //	<meter>
  'pattern,' +                //	<input>
  'placeholder,' +            //	<input>, <textarea>
  'poster,' +                 //	<video>
  'preload,' +                //	<audio>, <video>
  'readonly,' +               //	<input>, <textarea>
  'rel,' +                    //	<a>, <area>, <form>, <link>
  'required,' +               //	<input>, <select>, <textarea>
  'reversed,' +               //	<ol>
  'rows,' +                   //	<textarea>
  'rowspan,' +                //	<td>, <th>
  'sandbox,' +                //	<iframe>
  'scope,' +                  //	<th>
  'selected,' +               //	<option>
  'shape,' +                  //	<area>
  'size,' +                   //	<input>, <select>
  'sizes,' +                  //	<img>, <link>, <source>
  'span,' +                   //	<col>, <colgroup>
  'spellcheck,' +             //	Global Attributes
  'src,' +                    //	<audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>
  'srcdoc,' +                 //	<iframe>
  'srclang,' +                //	<track>
  'srcset,' +                 //	<img>, <source>
  'start,' +                  //	<ol>
  'step,' +                   //	<input>
  'style,' +                  //	Global Attributes
  'tabindex,' +               //	Global Attributes
  'target,' +                 //	<a>, <area>, <base>, <form>
  'title,' +                  //	Global Attributes
  'translate,' +              //	Global Attributes
  'type,' +                   //	<a>, <button>, <embed>, <input>, <link>, <menu>, <object>, <script>, <source>, <style>
  'usemap,' +                 //	<img>, <object>
  'value,' +                  //	<button>, <input>, <li>, <option>, <meter>, <progress>, <param>
  'width,' +                  //	<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>
  'wrap' +                    //	<textarea>
  '').split(',')
export const colorsValues: any = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  transparent: 'transparent'
}
export const colors: string[] = Object.keys(colorsValues).map((color: string) => `-${color}`)
export const rmeConfig: any = {
  colors: {} as any
}
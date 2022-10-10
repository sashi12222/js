console.log('today I am learning string in javascript');
const name='harry';
const greeting='Good evening';
console.log(name+greeting);

// concatenation in string
//concat(): joins two or more strings
let html;
html= '<p>this is my paragraph</p>'+
      '<h1>this is my heading</h1>';
 html=   html.concat(' Sashi Rajbanshi');
    console.log(html);
    // length:The length property returns the length of a string
    console.log(html.length);
    // A string is converted to lower case with toLowerCase()
    console.log(html.toLowerCase());
    // A string is converted to upper case with toUpperCase()
    console.log(html.toUpperCase());
    // String Indexing
    console.log(html[1]);
    // indexOf
    console.log(html.indexOf('my'));
    //lastIndexOf
    console.log(html.lastIndexOf('<'));
    //charAt
    console.log(html.charAt(3));
    //endsWith
    console.log(html.endsWith('dfdfdf'));
    //includes
    console.log(html.includes(' '));
    //substring
    console.log(html.substring(1,9))
    // 
    console.log(html.slice(0,4));
    // 
    console.log(html.split('>'))
    // 
    console.log(html.replace('this','it'));

    // template literals

    let fruit1='Apple\'s';
    let fruit2='Banana';
    //bac-ticks
    let myHtml=`hello ${name}
    <h1>This is heading</h1>
    <p>You like ${fruit1} and ${fruit2}</p>
    
    
    `;
    document.body.innerHTML=myHtml;
  



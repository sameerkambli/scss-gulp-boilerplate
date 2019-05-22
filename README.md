# SCSS Gulp Setup
An SCSS Boilerplate based on Gulp Compilation

## Install Nodejs
[Node.js Home Page](https://nodejs.org/)

## Setup Types
1. **No App File Setup**  
This setup is used for compiling just a single common CSS file from multiple partial SCSS files. This single CSS file then can be used Globally throughout your Project.

2. **With App File Setup**  
In some projects we need a specific CSS file for specific pages which are not used globally. For this type of requirement you can use this setup. You will get a common CSS file compiled & a specific CSS file(App File).

**Note: You need to use only one setup at a time as per your requirement**  


## Install Gulp Dependencies (Terminal)
**Note: You need to run your Terminal inside app-file-setup or no-app-file-setup**
```
$npm install
```

## Install Gulp Globally if you get any gulp related error (Terminal)
```
$npm install -g gulp
```

## SCSS to CSS Build Command (Terminal)
```
$npm run build-scss
```

## SCSS changes Watch Command (Terminal)
```
$npm run watch-scss
```

## For Compiling specific app file you need to create a config file
1. Copy config.shadow.json and rename the copied file to config.json.  
2. After the file is created you can add your app file name in blank space. **For eg:** If your app file name is admin.scss
```
{
    "app" : "admin"
}
```
3. Run SCSS to CSS Build Command `$npm run build-scss`

## Basic Usage
<p> <b>Source File(without app file)</b> </p>
<pre>
<code>
├── scss
    ├── base
        ├── main.scss
           ├── _variables.scss
           ├── _layout.scss
           ├── _global.scss
           └── _media_queries.scss
    ├── vendor
        └── bootstrap.css
</code>
</pre>

<br>

<p> <b>Output File</b> </p>
<pre>
<code>
├── css
    ├── app.css
    └── vendor.css
</code>
</pre>

<br>

<p> <b>Source File(with app file)</b> </p>
<pre>
<code>
├── scss
    ├── base
        ├── main.scss
           ├── _variables.scss
           ├── _layout.scss
           ├── _global.scss
           └── _media_queries.scss
    ├── vendor
        └── bootstrap.css
    ├── application (App File Folder)
        ├── _setup.scss
        ├── admin.scss (App File)
        └── frontend.scss (App File)
</code>
</pre>

<br>

<p> <b>Output File</b> </p>
<pre>
<code>
├── css
    ├── app.css
    ├── vendor.css
    ├── admin.css
    └── frontend.css
</code>
</pre>

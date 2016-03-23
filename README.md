# Buffer Icon Fonts

## Purpose

Buffer Icon Fonts is a fast, easy and flexible font generator for creating 
custom icon based webfonts for use across all devices.

## How to use

To get started, you'll need to install a couple dependencies to generate the
font files. These are dependencies of the 
[`grunt-webfont`](https://github.com/sapegin/grunt-webfont#installation) package.

```
$ brew install ttfautohint fontforge --with-python
```

Now lets install all the dependencies for node. Install grunt if you haven't 
already.

```
$ npm install -g grunt-cli
$ npm install
```

### Add a new icon

Once all the dependencies are installed you simply add the `.svg` files you want
to be included into the font into the 'src/icons' directory and run the 
`grunt` command.

The font, less and html files can be found in the `dist` directory.

## CDN

With the `grunt upload` task, these files can be uploaded to s3 for versioned hosting.
This can currently be done by adding valid AWS credentials to your environment vars
and running the task.

## TODO

- Automated upload to s3 via Jenkins based on a tagged release githook.

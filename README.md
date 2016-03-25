# Buffer Icon Fonts

## Purpose

Buffer Icon Fonts is a fast, easy and flexible font generator for creating
custom icon based webfonts for use across all devices.

## Usage

In your page's `<head>`, include the icon stylesheet from the CDN with the
version of your choosing. See the
[releases tab](https://github.com/bufferapp/buffer-icons/releases) for all
available version numbers. Example for version `0.2.0`:

```html
<link rel="stylesheet" href="//s3.amazonaws.com/buffer-icons/0.2.0/buffer-icons.css"/>
```

Now you can use these icons. Adjust the `font-size` and `color` in your css to
customize the icons.

```html
<i class="bi-circle-twitter"></i>
```

## Setup

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

## Release new version to CDN

To release a new set of icons, use the following steps:

1. Update your changes and ensure you check in your changes in the `dist`
directory. These will be the files published to the CDN.

2. Bump the version number in the
[`package.json`](https://github.com/bufferapp/buffer-icons/blob/master/package.json#L3)
file to a higher number. Use [semantic versioning](http://semver.org/) for your
update. For example, adding new icons would dictate a minor (0.**3**.0) increase,
fixing an existing icon could be a patch increase (0.4.**1**). After the new
version is pushed to master on github, move to step 3.

3. Head over to the [releases tab](https://github.com/bufferapp/buffer-icons/releases)
and click "Draft a new release." For the tag version, use the version number from
step 2 and add a title of your choosing. In the description add any information
on changes to icons in that release.

4. Click "Publish release." Jenkins will automatically grab this and publish
your new files to the CDN w/ your new version number. Update the version number
in your `<link>` tag and you're good to go!

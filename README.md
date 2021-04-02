# Rdz

## Installation

This is a [Jekyll](https://jekyllrb.com) project. Ruby 2.4.0 or later is required. You can install the required gems with `bundle install`.

If that doesn’t work, install [Docker Desktop](https://www.docker.com/get-started).

## Run local web server

If you have a working local Jekyll installation:

```
bundle exec jekyll serve
```

If you’re using Docker:

```
docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```

The development website will be available at [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

## Managing Content

There are two broad categories of pages:
*  **Self-contained pages** have everything in a single file. These files reside at the root level of the project:
    * `about.html`
    * `404.html`
    * `audio.html`

* **Dynamic pages** make complex content easier to manage by splitting it into multiple files, which are then assembled into a single page by Jekyll. Each dynamic page has a corresponding folder at the root level of the project:
    * `_curation`
    * `_projects`
    * `_workshops`

## Image Sizes

These are recommended sizes. Things will still work if some images are slightly bigger or slightly smaller or not exactly the right proportions.

* Top project: 2048 × 1280
* Regular projects: 2048 × 820
* Audio artwork: 600 × 600
* Curation: 2048 × 820
* Workshops: 1024 × 750 (the height can vary if you want)
* About photo: 1024 × * (the height can vary)

## Todo

* Add audio player
* Add hover effects
* Allow projects, workshops and curation to be manually ordered
* Allow projects to be archived and make Archived Projects show only those projects
* Don’t make first project big on archive page
* Integrate final design for project pages

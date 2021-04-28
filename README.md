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

### Audio player

To configure the audio player, edit `live.html`. Change `enable` to `false` to completely hide the audio player.

### Projects

Projects reside in the `_projects` folder. Each project has its own folder with a single HTML file and several images.

Projects are sorted by date. To reorder them, edit the `date` field at the top of the HTML file.

To hide a project from the home page and send it to the archive, set `archived: true` at the top of the file.

### Curation

Curation content resides in the `_curation` folder. They are ordered by filename. To reorder them, edit the number at the beginning of the relevant filenames.

### Workshops

Workshops reside in the `_workshops` folder. They are ordered by filename. To reorder them, edit the number at the beginning of the relevant filenames.

### About, Audio, 404

These are self-contained pages that have everything in a single file. These files reside at the root level of the project:
    * `about.html`
    * `audio.html`
    * `404.html`

## Image Sizes

These are recommended sizes. Things will still work if some images are slightly bigger or slightly smaller or not exactly the right proportions.

* Top project: 2048 × 1280
* Regular projects: 2048 × 820
* Audio artwork: 600 × 600
* Curation: 2048 × 820
* Workshops: 1024 × 750 (the height can vary if you want)
* About photo: 1024 × * (the height can vary)

## Todo

* Add "Back to projects list"
* Add link from archived projects to home page
* Highlight current section in main menu

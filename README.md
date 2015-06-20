## TODO

- [ ] add google analytics tracking to head.html
- [ ] add site to WMT (search console)
- [ ] rewrite about.md
- [ ] photos for carousel on about page

## Updating the website

The website is hosted for free using GitHub Pages, and runs on Jekyll. I can view the website locally by running a jekyll server on my computer, and I can deploy the website to production simply by pushing my changes to GitHub.

Here are the tools that I use to develop the site:

### Atom

This is a plain old text editor, but includes (among other things) syntax highlighting and preview features for Markdown, the "language" in which my `/about` page is written.

I can activate the Markdown Preview feature by pressing command-shift-P, typing "Markdown Preview…", and hitting enter.

When I save changes in Atom to my local `~/Sites/juhneece.github.io` directory, the jekyll server will auto-update if it is running (see the section on **iTerm** below), and my changes will be tracked in **SourceTree** for me to discard or commit as I please.

### SourceTree

This is a GUI for interacting with git and GitHub. I can use it to ensure that my local copy of the site and the production copy of the site are in sync. I can effectively also use it to deploy local changes to production (i.e. juhneece.com).

SourceTree will alert when my local branch is behind `origin master`. If this is the case, I should click the "Pull" button.

When I have local changes that I want to deploy to the server, I should:

1. check the boxes next to them, which stages them
2. type a commit message and click the "Commit" button, which commits them
3. click the "Push" button, which will push them to GitHub

GitHub will automatically deploy the new changes to GitHub pages. juhneece.com should update instantly.

### iTerm

This is a Terminal-like command line application. To run a local server (which is needed to view changes before deploying to production), I just need to type these two commands:

```bash
$ cd ~/Sites/juhneece.github.io
$ jekyll serve
```

The local website will be available at `http://localhost:4000`. After saving changes to files in `~/Sites/juhneece.github.io`, the server will automatically update. I just need to refresh my browser to view the changes.

When my local site looks satisfactory and I'm ready to deploy my changes, I will follow the instructions in the **SourceTree** section above.

### Transmit

This is an FTP application with a dedicated interface for connecting to Amazon's S3 file storage service, which is what powers my file-hosting domain `files.juhneece.com` (where my résumé is stored).

To add or update a file on the S3 server:

1. Open Transmit
1. Connect to the `files.juhneece.com` server (saved as a Favorite)
1. In the left (local) pane of the Transmit window, locate the file I want to move to the server
1. Drag and drop the file into the right (server) pane of the Transmit window

Make sure to drop the file in the `files.juhneece.com` bucket. If the file is my résumé, be sure it has the filename `resume.pdf` so that the old résumé file is replaced and existing links to `http://files.juhneece.com/resume.pdf` correctly point to the new résumé.

----

I forked this from https://github.com/clarkbk/clarkbk.github.io.

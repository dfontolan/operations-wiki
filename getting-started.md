---
layout: default
title: How to use this wiki
---

## Add or update a document

1. Create or edit a Markdown (`.md`) file in this repository.
2. Add the short header shown below at the top of the file.
3. Add the page to `_data/navigation.yml` so it appears in the left navigation.
4. Commit and push your change. GitHub Pages will publish it automatically.

```yaml
---
layout: default
title: Your page title
---
```

## Organise content

Use folders for related content, such as `operations/`, `reference/`, and `templates/`. A page at `operations/example.md` is available at `/operations/example/`.

Keep navigation labels short. Nest a page under a heading by placing it in that heading's `children` list in `_data/navigation.yml`.

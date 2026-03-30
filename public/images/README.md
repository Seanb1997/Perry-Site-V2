# Images Folder

Drop your website images in this folder. Once you've added an image here,
it can be referenced in the code with the path `/images/your-filename.jpg`.

---

## Recommended images

| Filename            | Used where                  | Best size / format                       |
|---------------------|-----------------------------|------------------------------------------|
| `hero.jpg`          | Homepage hero background    | Landscape, 1920×1080px or larger         |
| `about-banner.jpg`  | About page banner           | Landscape or portrait, high resolution   |
| `perry-profile.jpg` | Any profile photo usage     | Square or portrait, min 800px wide       |

---

## How to activate an image in the code

### Hero image (homepage)

Open `app/components/Hero.tsx` and find the grey placeholder `<div>`.
Replace it with:

```jsx
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/hero.jpg')" }}
/>
```

### About page banner image

Open `app/about/page.tsx` and find the `<section>` with the comment
"HOW TO ADD A BANNER PHOTO". Follow the instructions in that comment.

---

## Tips

- Use `.jpg` or `.webp` for photos (smaller file size, faster loading).
- Compress images before uploading — a free tool like [Squoosh](https://squoosh.app)
  or [TinyJPG](https://tinyjpg.com) works well.
- Aim for hero images under 500KB after compression.

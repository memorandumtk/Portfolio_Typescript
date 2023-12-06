## Timer function
- I reffered [this site](https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9) for calculate time from start date.
- I know useEffect can be called only top level of the function. [Ref](https://coderpad.io/blog/development/rules-of-react-hooks/#:~:text=Only%20call%20Hooks%20at%20the%20top%20level%20of%20your%20functional,which%20these%20Hooks%20are%20called.) 
- When I encountered this error, I went to [this site](https://nextjs.org/docs/getting-started/react-essentials).
 > You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

### My Image Styling
https://stackoverflow.com/questions/60362442/cant-center-absolute-position-tailwind-css

### Important class name of sticky part of 'Home' page
```
sticky top-0 max-h-screen flex-none w-1/2
```

### TailWind social media svg
https://tw-elements.com/docs/standard/components/social-buttons/



### What I did at the time when I changed package manager 'pnpm' to 'npm'
1. Delete node_module folder.
2. Delete pnpm lock yaml file.
3. Execute `npm install`.
4. Reload vs code window
```
https://stackoverflow.com/a/69230734/21951181
```

### What to do after cloning repo
1. Package install such as `npm install`
2. Build next using `next build` command.
3. .env setting as needed.

### Error 'Could not find a declaration file for module 'react-router-hash-link'. how to deal with
https://stackoverflow.com/a/56877787/21951181


### Changing header link style based on the element that is linked to is in screen using Observer API
https://betterprogramming.pub/react-useinview-hook-intersection-observer-animations-and-multiple-refs-73c68a33b5b1

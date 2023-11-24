## Timer function
- I reffered [this site](https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9) for calculate time from start date.
- I know useEffect can be called only top level of the function. [Ref](https://coderpad.io/blog/development/rules-of-react-hooks/#:~:text=Only%20call%20Hooks%20at%20the%20top%20level%20of%20your%20functional,which%20these%20Hooks%20are%20called.) 
- When I encountered this error, I went to [this site](https://nextjs.org/docs/getting-started/react-essentials).
 > You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
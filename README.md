## Getting Started

1. run `npm install` or `yarn`

2. run `npm run dev` or `yarn dev`

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assignment

During this assignment, we are building a simple, yet powerful, Autcomplete component. This autocomplete will help find across different articles. The component must:
1. Have an input where the user could search for an article based on its title. (see `components/Input`)
2. Have a list component showing the first 3 articles (or less) (see `components/ListItem`)
3. when searching for an article, a call should be made to `/api/posts` to `GET` the different posts based on the given input. The get requests expects a `params` object of type `{ q: string }` where q is the query to filter all the posts
4. When selecting an article `onSelectItem` should be triggered 

Feel free to ask as many questions as you want. You can see this as a peer coding interview where we look together at how we could solve this problem. Please explain, to the best of your abilities, why you choose to do something. `We care more about your thought process than your clean code!`

## Questions

Here's some questions to better understand your React/Next.js knowledge. No worries if you don't know the answers, we're here to help.

1. One annoying thing about this autocomplete is that it will fetch on every keystroke... How could we optimize this? 
2. Moreover, here's one annoying scenario: 
    - Suppose I write `hello world` in the input bar the first time
    - I fetch the data and show it on the screen (awesome!)
    - I do another search `hackerman`, same thing I get my response (woohooo!)
    - For some reason, I write `hello world` again in the search bar, it will refetch the same data as the first time... 👎

    How could we avoid refetching the same data over and over again? Do you know a library that can do that? If yes, please explain how it works.

3. Last but not least, suppose (for some strange reason) that the `ListItems` component and the `Input` component were NOT part of the same parent component (think opposite side of the DOM tree). How would you still achieve this autocomplete logic? Do you know a library that can do that? If yes, please explain how it works & why it is better than some others (in your very biased opinion)

## Documentation

The libraries used during this interview are similar to the ones we use at Metacommerce on a daily basis. No worries if you do not know some of them, here's all the documentation you need in case you forget something:

- [Ant Design components library](https://ant.design/components/overview/)
- [Axios](https://axios-http.com/docs/api_intro)
- [Next.js](https://nextjs.org/docs/getting-started)
- [lodash](https://lodash.com/docs/4.17.15)

## 

# Interview Assignments


## Scholarship Search Assignment

Implement the [Atila Search page](https://atila.ca/search)

It doesn't need to support all the additional features on the Atila search page. Such as pagination, url updating, support for blogs etc.

All it needs to do is: type a word -> return relevant scholarship results

### Getting Started

1. Make an [Algolia](https://www.algolia.com/) account
2. Follow the [React Instant Search tutorial](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
    1. Import data for your index from [`data/scholarships.json`](https://github.com/atilatech/client-web-app/blob/master/data/scholarships.json) 
    1. Create a new Route `localhost:3000/search`
    1. Create a new Scene `src/scene/Search.tsx` -> Make sure you use typescript
    1. Render the results using the [`ScholarshipCard`](https://github.com/atilatech/client-web-app/blob/master/src/scenes/Scholarship/ScholarshipCard.js) component but refactor it to look nicer

## General Instructions

### Rubric

During this interview we will be assessing you on 3 metrics

- **Coding:**
    - [ ] Code works and meets requirements
    - [ ] Handles edge cases
    - [ ] Semi-sensitive information (e.g. public keys) is in an environment variable
    - [ ] Bonus: Has at least one test

- **Communication :**
(demonstrated via your pull request)
    - [ ] multiple descriptive commits
    - [ ] description that clearly explains the purpose of the PR and what it does
    - [ ] screenshots on desktop and mobile
    - [ ] link to a video Demo [(use Loom)](https://loom.com/)
        - You Don't have to show your face and you don't have to talk in the video, just show that the product works

- **Design (UI and UX):**
    - [ ] Looks nice
    - [ ] Follows UI and UX best practices
        - [ ] Shows a loading spinner when waiting for remote network calls
        - [ ] Shows user information (no results, network error etc.)

### Submission

1. Fork this [repo](https://github.com/atilatech/client-web-app)

2. Make a new branch and implement your changes on that branch (remember to commit frequently)

3. Make a pull request merging your branch with the changes into the forked branch on your account (don't request a merge to the atilatech account)

4. Copy the URL for this Pull request and add it to your [application form](https://docs.google.com/forms/d/e/1FAIpQLSetEI2sdgTOZTuIZKaRBuol-Tr5EkmP3O88Va2Dn6zTU9IMNQ/viewform)

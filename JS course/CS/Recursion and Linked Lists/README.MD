- [Recursion video from CS50](https://www.youtube.com/watch?v=mz6tAJMVmfM)
  - [Fibonacci part of video](https://youtu.be/mz6tAJMVmfM?t=512)
  - [Collatz part of video](https://youtu.be/mz6tAJMVmfM?t=576)

- [wiki article on implementation issues](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#Implementation_issues)
 - noteworthy: checking the recursion would meet the base case before actually recursing avoids and extra recursion call. Quote from article:
    >  *A general procedure for a simple hybrid recursive algorithm is short-circuiting the base case, also known as **arm's-length recursion**. In this case, whether the next step will result in the base case is checked before the function call, avoiding an unnecessary function call.*
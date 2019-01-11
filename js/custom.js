const message = () => {
    const part1 = "I didn't want to learn to just code, I wanted to learn to think like a software engineer and tackle on complex problems. The thought process of trade offs, time complexity, space complexity, importance of semantics in my code, the logic behind different data structures.\nI am constantly striving to improve if you look below you'll see my badges/links from websites where I solve coding challenges.";
    const part2 = " This isn't just a job or career path to me, this is what I personally look forward to every single day and its like an ever evolving puzzle to solve."
    const part3 = "\nLearning to write code wasn't enough for me I personally wanted to take the time  to learn different sorting algorithms, searching, implementing different data structures, that is why you'll also see links to my github with examples as well as repl.it where I would test my code."
    return part1 + part2 + part3;
}

document.getElementById("grabThis").innerText = message();
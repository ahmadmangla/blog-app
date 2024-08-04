import slugify from "slugify";
import { Product } from "./types";

export const data: Product[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "Introduction to Agile Methodology",
        "body": "Agile methodology is a popular approach in software development that emphasizes iterative progress, collaboration, and flexibility. It allows teams to deliver small, incremental changes that lead to continuous improvement and faster delivery of value. Agile practices include regular stand-up meetings, sprint planning, and retrospectives to ensure the team remains aligned and can adapt to changes quickly. This methodology promotes close collaboration between cross-functional teams and stakeholders, fostering a culture of transparency and continuous feedback."
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Understanding Version Control with Git",
        "body": "Version control is a crucial aspect of software development, and Git is one of the most widely used version control systems. Git allows developers to track changes, collaborate seamlessly, and manage multiple versions of their codebase. Key concepts in Git include repositories, branches, commits, and merges. A repository is a storage space for your project, while branches allow you to work on different features or fixes concurrently. Commits record changes to the repository, and merges integrate changes from different branches. Learning Git can significantly improve your workflow and collaboration within a development team."
    },
    {
        "userId": 1,
        "id": 3,
        "title": "The Importance of Code Reviews",
        "body": "Code reviews are an essential practice in software development that help maintain code quality, improve learning, and foster collaboration. During a code review, peers evaluate each other's code, providing feedback on functionality, readability, and potential issues. This process helps catch bugs early, ensures adherence to coding standards, and enhances the overall quality of the codebase. Additionally, code reviews serve as an excellent learning opportunity for junior developers, as they can gain insights from more experienced colleagues. Implementing regular code reviews can lead to more maintainable and robust software."
      }
      
      
]
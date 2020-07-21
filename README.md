# Homeschooling

ThoughtWorks Australia Shokunin 2020 July Challenge.

## Usage

-  Install Node.js 14.5.0 or install [NVM](https://github.com/nvm-sh/nvm) and run `nvm install`
-  Run: `./go`
-  Test: `npm t` (install dependencies first with `npm i`)

## Problem Statement

### Background

In one busy Australian household both parents have been working from home during lockdown while also home schooling their three children (triplets).

Each day the children's teacher assigns a list of tasks for them to complete between them. Each task is assigned some points based on difficulty.

The parents are keen that each day each child completes the same number of points so as not to fall behind. And also to stop the constant bickering about who does more/less work :)

For example on Monday the teacher assigned:

Task A: 5 points
Task B: 4 points
Task C: 1 point
Task D: 2 points
Task E: 7 points
Task F: 8 points
Task G: 3 points

These tasks can be split amongst the triplets like so:

Child 1: Task D (2 points) + Task F (8 points) = 10 points
Child 2: Task A (5 points) + Task B (4 points) + Task C (1 point) = 10 points
Child 3: Task E (7 points) + Task G (3 points) = 10 points

The children cannot work on the same task. That would require the negotiation skills of a UN diplomat.

The family needs a way to quickly assess if the tasks can be divided amongst all the children so they each get the same number of points.

If the tasks fail to be split between the three children they will send them back to the teacher and ask for a new set of tasks.

### Challenge

The challenge is to write some code that will take any given list of tasks with associated points and output No if the tasks can't be split with points divided evenly between the three children; and output Yes plus the tasks with points for each child if they can.

### Submission

_What to submit?_

- A link to your Github solution repo in a response to this email

_When to submit?_

- By 23:59:59 on Thursday July 23rd AEST (that's 2 weeks away)

_What language(s) can I use?_

- Anything you feel happy/comfortable with, as long as it allows you to demonstrate the following Criteria for Awesomeness.

### Criteria for Awesomeness

- Solving the problem as outlined in "Challenge"
- A command line interface for inputting tasks/points and outputting the result
- Clean Code
- Evidence of TDD
- A go script and README

### Challenge Author and Head of Judging Panel

_Karen Davis_

### FAQ: What is Shokunin?

Shokunin is an annual series of coding challenges run for ThoughtWorks Australia consultants.  There are 6 challenges each year (April-September), and everyone is invited to enter.  Paired or group submissions are also most welcome.

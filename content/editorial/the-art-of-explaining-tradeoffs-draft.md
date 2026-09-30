# The Art of Explaining Tradeoffs

**Status:** Draft 1 · not published  
**Traces to:** Manifesto → Tradeoffs; Principles 2, 4, 5, 6, and 7  
**Source:** `content/editorial/thoughts.md` (philosophy and tradeoffs interviews)  
**Public rule:** the moves and the line are in. Names, accounts, and live deals are out.

Leadership isn’t about finding the perfect answer. It’s about making the tradeoffs clear.

---

I learned the practice before I learned the name.

Early in my career, not long after I became a project manager, a large claims customer handed me a spreadsheet and a date. They wanted everything on the list delivered by that deadline.

I did not know the phrase iron triangle. I did not have a framework to stand behind. I simply knew it could not be done.

I sat with them in a loud room full of fans and servers and told them so.

They did not like the answer. They were accustomed to getting their way, and I was new enough to believe that being correct was the same thing as being persuasive. I was blunt, but what changed the room was not a better no. It was the explanation that followed.

They were claims professionals. They did not live in software. I walked them through what a release actually required: the testing, the difficulty of pushing a desktop product onto tens of thousands of laptops, and the cost of getting it wrong and having to roll it back. In those years, much of the testing was still manual. Everything took longer than someone outside the work would reasonably expect.

Once they could see the machine, the spreadsheet stopped being a demand and became a conversation about what would fit. The scope had not changed. The deadline had not changed. What changed was that the tradeoffs had become visible.

That account became a partnership that lasted for years. Eventually, they stopped seeing us as a custom development shop and moved toward the product we sold to the entire industry.

The lesson I carried forward was simple: a tradeoff explained to someone who can see the cost is a different experience from a tradeoff announced by the person holding the schedule.

Over time, I came to see explaining tradeoffs as a distinct leadership skill. The goal is not to convince people that your preferred answer is right. It is to help them see what each choice requires, what it protects, and what it puts at risk. When the costs remain hidden, a decision can feel arbitrary. Once the costs become visible, disagreement can become a real conversation.

There is, however, a dishonest version of that same explanation.

You can describe the difficulty of the work to help someone understand reality. You can also describe the difficulty of the work to lower expectations before anyone has tested whether the ask is fair. I have stood close enough to that line to know that the difference matters.

At the time, we were not particularly good at forecasting. Customers pushed for as much as they could get, and I sometimes emphasized the length of the work because I genuinely did not know how long it would take.

In one meeting, I told a customer three months. Separately, a developer told them two.

The gap was real. My number included the possibility that we would have to pull back a release candidate and rebuild it, along with the chance that a defect would surface late. The developer’s number covered the raw build.

The experience changed how I worked. Developers owned the estimate. I carried the buffer. One voice gave the customer the date.

I would still defend that buffer today, but only in terms I would be willing to explain in the room. We are imperfect at forecasting. I would rather beat a date than miss one. The people across the table have bosses and commitments of their own. A missed date does not simply disappoint them. It makes them look unreliable inside their company. Helping them remain credible is part of the job.

What I will not defend is a buffer I cannot explain.

If the only reason for adding a month is that I do not want customers to know we might finish in a week, the honest sentence is still available: we underpromise because we would rather overdeliver, and because our other commitments are real. The moment I become afraid to say that sentence aloud, the buffer has become something else.

My earlier mistake was dictating dates to developers. I learned quickly that the people doing the work know the work. The estimate belongs to them. The person facing the customer owns the promise, including the consequences of a miss.

Those are different responsibilities, and leadership requires making both clear.

Years later, the same lesson appeared at a larger scale.

We stopped treating every customer request as a custom feature. We had too many customers, too much unique code, and both quality and predictability were suffering. Instead of asking only what feature a customer wanted, we began asking what problem the customer needed solved. Then we tried to solve that problem for the industry rather than for a single account.

That choice involved a tradeoff. Customers gave up some customization. In return, they received a more reliable product, better quality, and a roadmap capable of moving forward.

We made a similar change in how we discussed dates. Instead of carving dates in stone months before we understood the work, we began narrowing our commitments as uncertainty declined. A capability might begin as “third quarter next year.” Later, it became “the September release.” Eventually, it became a specific date.

As uncertainty decreased, precision increased.

After a few years of consistently hitting those narrowing commitments, trust compounded.

I saw the value of that approach when we planned a piece of vendor-invoice work well in advance. About a month before the release, we found defects deep in the calculation code. I told the customer that we had discovered the problem late and were postponing the release.

They accepted it.

There had not been a fixed date sitting in a contract for half a year, so the delay did not feel like the reversal of a promise we never should have made. The customer could hear that we cared more about the integrity of the numbers than about preserving the appearance of being on time.

A fixed date turns a quality problem into a broken promise.

A narrowing promise turns it into news.

The cost of working this way is that you give up the theater of certainty. Some customers and executives experience a quarter as evasion. It takes years of consistently delivering before “we will narrow this” sounds like discipline rather than a dodge.

We spent those years building that trust. I do not know a faster way that still deserves it.

Not every tradeoff offers a clean win. Sometimes the work of explaining becomes the work of finding an outcome both sides can genuinely experience as a win.

A customer once needed a custom report on a timeline we could not meet. The code and the debt would not allow it. At the same time, we were building another capability that we intended to charge for. I offered the customer a few months of that new capability at no cost and committed to delivering the report when we could honestly do it.

Then I did something else.

I told the analyst I worked with every day what I was about to do. I planned to tell the analyst’s boss that the analyst had pushed us hard. The negotiation would be described as tougher than it actually was, and the analyst knew that. In fact, the analyst wanted it.

The boss heard a story in which the analyst had represented the company well. We reset the date on the difficult request, and the relationship improved rather than deteriorated. We are still friends.

I will call that a game. Business contains a lot of gray. I will not call it a lie because the person in the game consented and because I would not be afraid for the pattern to become known.

The test I use is simple: if I would not want the arrangement described publicly, I should not make it.

Spin, emphasis, and a story both sides understand can fall inside the line. An overt lie does not. Acting as though I am doing the other person a favor from a superior position does not.

I have used a less complicated version of the same instinct. A customer once had a difficult problem and a smaller problem that mattered to someone who needed a win with their boss. I agreed to take the smaller one while extending the timeline on the larger one.

In that case, we completed both.

Setting the longer expectation was the safer risk. Promising both and then missing the one that mattered would have cost more than the unused capacity did.

There is a danger in working this way. You can become so good at managing perception that you stop distinguishing between a win people felt and a win that was actually true.

I have not yet lived through a felt win that later proved to be a poor decision. Until I do, I hold the rule loosely: if everyone genuinely experiences the outcome as a win, I count it. But I keep a second rule beside it.

Perception is not a substitute for the work.

I have watched people coast for years because the organization believed they were working hard. I will not do that, and I will not respect it.

The art of explaining tradeoffs therefore requires more than persuasion. It requires honesty about the work itself. A good explanation does not make the cost disappear. It lets people see the cost clearly enough to decide whether they are willing to pay it.

That becomes even harder when the conversation moves upward.

A customer can be taught how the machine works. An executive can spend the tradeoff before you ever enter the room.

Someone important calls. Your leaders want to take care of the customer and say, naturally, that the team will handle it. The urgent request arrives already approved in principle. If the work already underway is invisible, the reasonable assumption is that the team can do both.

That is why the first act of explanation with executives is often not a speech. It is a board that shows the real work, including the foundational work, and is fed by the system rather than by a story someone prepared for a meeting.

I have worked in places where the dashboard existed primarily to reassure someone else’s boss. That kind of board is worse than no board at all. It teaches everyone to distrust the picture.

A board that can look unhealthy is the only kind capable of forcing a real choice.

Even with that visibility, a senior leader may fall in love with an idea. The leader may not know the existing commitments and may not particularly want to. Urgency enters the conversation, and people begin talking as though the idea is already late.

I used to treat every one of those conversations as an order. Eventually, I learned to ask a prior question: If we do not do this, will it make the leader look bad to a customer or to the leader’s own boss because a commitment has already been made?

If the answer is yes, the urgency is real, and we act accordingly.

If the answer is no, it may simply be enthusiasm, and enthusiasm can fade.

Many of those urgent ideas are never mentioned again.

The cost of applying that filter is that you will sometimes look unresponsive to someone who signs your checks. The cost of skipping it is that every mood becomes a plan, and the team learns that process is whatever the most recent excited conversation required.

There are exceptions.

I have called a team together, told the team the truth, and worked the extra hours alongside everyone because a commitment above us was real and the calendar would not move. We decided the details together. We had not worked that way in years. It stretched us, but it did not break us, largely because it was rare.

Rarity is the principle.

A crunch can be a change of pace. When crunch becomes the normal way of working, people become jaded. If you are going to ask for extraordinary effort, be in the room for it.

You also cannot spend authority you do not have on a promise your own leaders will reverse. I learned that when a no I had given a customer was turned into a yes by someone without the history. We lived with the consequences of that second path for years.

The useful scar was cultural: nobody promises a customer the work until the people who must build it have been through the tradeoff.

Not every tradeoff, however, is permanent.

I once believed a release candidate required four weeks of manual testing regardless of the circumstances and that every fix restarted the clock. We tracked those cases in spreadsheets and worked through an enormous list of scenarios.

Automation changed the math.

On our newer online product, we can fix defects closer to the release because the tests run without the same human queue. The old constraint was real, and then it died.

That experience taught me that making tradeoffs clear also means being willing to revisit them. A constraint may be real today without being permanent. Leaders should defend genuine constraints, but they should not turn old limitations into eternal principles simply because the organization has learned to live with them.

Some constraints disappear when technology changes. Others merely change shape.

Discovery has not disappeared.

We have called it design, research, user experience, and product discovery. The time required to understand a problem does not disappear simply because the time required to test a build has decreased.

We have skipped that work. When the question involved the color of a button, the consequences were manageable. When a project manager or engineer invented an experience without research, we too often had to rebuild it.

Skipping understanding is a debt. It just does not feel like debt on the day you incur it.

Artificial intelligence belongs in the first category until it proves that it belongs in the second. It has already shortened loops I once had to grind through by hand. It has not eliminated the need to decide whose problem we are solving, whose reputation is attached to the date, or which cost we are willing to pay.

My bet is that those judgments become more valuable as more of the mechanical work disappears. I do not have completed proof. I have a career of watching methods and technologies arrive with the promise that the difficult tradeoff is finally over.

So far, the tradeoffs have survived.

I coached football for eight years. You can teach kids to run the play you drew up. You have more success when you teach them the game.

Why this player gets blocked.

Why that player is left unblocked so you can read the player.

What the person lined up across from you wants to do.

Where that person is strong and what that person tends to do.

I have come to see leadership frameworks the same way. Scrum, Kanban, Extreme Programming, SAFe, product operating models, and waterfall all contain useful ideas. I have used them. There is something worth keeping in each.

What none of those methods can fully explain is what the person across the table is optimizing for.

Mid-level partners are rarely fighting you for a feature. They are trying to do a good job, be paid fairly, and look competent to their boss.

Your own leaders are often trying to protect a promise they have already made.

Your team is watching to see whether the process you ask everyone to follow is the same process you follow when someone senior becomes emotional.

Explaining a tradeoff means making all of that visible. It means showing what each decision gains, what it gives up, and who will carry the cost. It means translating the choice into language the other person can use with the people they answer to. It means acknowledging uncertainty without hiding behind it, protecting credibility without manipulating perception, and never telling a story you would be unwilling to stand behind.

Leadership is not about finding the perfect answer.

It is about making the tradeoffs clear enough that people can make an informed choice with you, rather than discovering the cost after you have made the choice for them.

The cost of becoming good at that work is that you will disappoint people who wanted certainty, speed, and a yes.

The cost of avoiding it is that you will keep saying yes until the only people who understand the price are the ones forced to pay it.

# When Building Gets Cheap, Choosing Gets Expensive

**Status:** Published  

**Traces to:** Manifesto → Tradeoffs; AI leadership cluster  
**Source:** Copilot workplace research + Zeke answers, October 2026  
**Public rule:** scenes and costs are in. Employee names, account names, product names, live deals, and headcount are out.  
**Naming on the page:** photo work = an AI feature that adds descriptions to photos.  
**Left out on purpose:** coding-agent workstream specifics; security-worse-first detail; photo pilot rates and harsh survey quotes; Product/Engineering feasibility-boundary day; entire cross-platform initiative story; capacity-refill claim; deep guardrails/trust material reserved for the sibling AI essay.

AI makes producing software cheaper and faster, increasing the importance of deciding what is worth building.

---

When building gets cheap, more code can be a good thing.

It can also be a faster way to implement a bad strategy.

That is the part I keep coming back to. Building faster helps when you understand the problem and know what you're trying to accomplish. But when the outcome isn't clear and the ability to build something replaces good judgment, moving faster doesn't help. It just lets you make the wrong decision faster.

Decision-making becomes more important, not less.

---

I watched the cost of producing software move in a matter of days.

An engineer on a dual-license pilot described using a coding agent the way people used to describe a strong week of focused work — except several substantial workstreams were moving forward at the same time, between meetings, in a matter of days.

The reaction in the thread was what you would expect. Incredible output. Parallel work. A few days.

I believed the report. I also believed the quieter point underneath it. Even when the machine can write that fast, someone still has to say what “done” means, what must not be touched, and what counts as an acceptable result.

That is an enormous opportunity. Work that used to eat teams and calendars can now be attempted in parallel by a person who is also in meetings. The unit cost of producing software changed. Once that is true, deciding what to build becomes more important than ever.

---

A few months earlier I had seen a smaller version of the same pattern.

Someone asked a model to scan a repository and propose what could be consolidated into backend services. It came back ranked. It even guessed at timelines. The person who ran the prompt did the right first thing: treat it as interesting, not as a plan.

I said what I was thinking. The speed was fascinating. I did not understand how it could know the dates.

An engineering leader put the point more cleanly than I did. The scan could surface useful things to investigate. Each item still needed a deep dive. The timeline numbers should be treated as random. AI does not lack confidence in giving an answer.

Nothing dramatic failed in that thread. That is why I remember it. Analysis had become nearly free. Confidence had not become proof. A useful suggestion is still only a suggestion until someone does the work of deciding whether it holds.

---

The customer-facing version of this took longer to learn.

We had a real problem. People working claims were spending too much time typing descriptions for large sets of estimate photos. An AI feature that adds descriptions to photos looked like an obvious win: start from a generated draft instead of a blank field, then review and approve.

The first version could generate text. It could be demoed. It could be piloted. It shipped.

Then the evidence came in. After it shipped, customers often rewrote or abandoned the descriptions. Interest was real, but many would not use the output as written. The useful diagnosis was blunt: the feature was describing what was visible, not why the photo mattered for the claim.

We did not treat that as proof we should never have tried. The underlying problem was still real. What the first version bought us, cheaply, was a clearer view of the harder product problem: claim-relevant language, workflow fit, trust, review, and whether people would keep using it. The follow-on work was not “make the model write faster.” It was decide what good looks like once writing was no longer the hard part.

That is what cheap building does. It gets you to the expensive question sooner.

---

I do not think the job gets smaller when models write code.

I think the blast radius of a vague decision gets larger.

When production was expensive, a weak idea often died slowly. It took too many people too many months to finish the wrong thing, and reality interrupted you. When production is cheap, that same idea can be prototyped, demoed, and partially shipped before anyone admits the outcome was never clear.

AI gives us the ability to build software faster than ever before. That is an incredible opportunity.

Building the wrong thing faster is still building the wrong thing.

The technology has changed. The responsibility to make good decisions has not.

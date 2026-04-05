---
title: "SolverForge"
date: 2025-12-07
draft: false
description: "A production-ready Rust constraint solver with quickstarts, scaffolding, and routing/UI companion crates"
tags: ["Rust", "Optimization", "SolverForge", "Constraint Programming", "Planning"]
showHero: false
showTableOfContents: true
---

{{< lead >}}
A production-ready constraint solver ecosystem in Rust for planning, scheduling, and routing. SolverForge combines typed domain modeling, Constraint Streams, incremental scoring, and practical tooling that makes optimization systems usable in real applications.
{{< /lead >}}

## What it solves

[SolverForge](https://solverforge.org) tackles combinatorial planning problems where business rules matter as much as raw optimization: employee scheduling, vehicle routing, task assignment, timetabling, and resource allocation.

{{< keywordList >}}
{{< keyword icon="calendar" >}} Scheduling {{< /keyword >}}
{{< keyword icon="truck" >}} Routing {{< /keyword >}}
{{< keyword icon="cube" >}} Resource Allocation {{< /keyword >}}
{{< keyword icon="diagram-project" >}} Task Assignment {{< /keyword >}}
{{< /keywordList >}}

---

## What exists today

SolverForge is no longer just an architectural direction. The Rust core is live, documented, versioned, and usable today.

### Production-ready Rust solver

The main `solverforge` crate is a native Rust constraint solver with a full metaheuristic stack, typed moves, derive-macro modeling, incremental SERIO scoring, and channel-based solve orchestration.

{{< mermaid >}}
graph TD
    A["Domain Model"]
    A --> B["Derive Macros"]
    B --> C["Constraint Streams"]
    C --> D["SERIO Incremental Scoring"]
    D --> E["Metaheuristic Solver"]
    E --> F["SolverManager / Telemetry"]
{{< /mermaid >}}

### Practical developer surface

The ecosystem now includes the surrounding pieces that make a solver evaluable and adoptable:

- **Quickstarts** for concrete planning domains
- **Standalone CLI scaffolding** via `solverforge-cli`
- **Documentation site** with modeling, constraints, and API guidance
- **Companion crates** such as `solverforge-maps` for road-network-backed routing workflows
- **UI integration support** for solver-backed applications

{{< alert icon="lightbulb" >}}
**What changed:** the older public framing treated SolverForge as a native rewrite still underway. The current project status is much stronger: the Rust solver is already the flagship public artifact, with real documentation, releases, examples, and companion infrastructure around it.
{{< /alert >}}

---

## Project shape

{{< timeline >}}

{{< timelineItem icon="code" header="Continuity" subheader="Legacy Python lineage" >}}
SolverForge preserves continuity with earlier production constraint-solving work and the `solverforge-legacy` line, but the center of gravity has moved to the native Rust stack.
{{< /timelineItem >}}

{{< timelineItem icon="shield" header="Core Platform" subheader="Rust solver" >}}
The main solver is production-ready: Constraint Streams, incremental scoring, construction heuristics, local search, exhaustive search, partitioned search, typed moves, score analysis, and solve telemetry are all in place.
{{< /timelineItem >}}

{{< timelineItem icon="toolbox" header="Adoption Surface" subheader="Docs, quickstarts, scaffolding" >}}
SolverForge now has the surrounding product surface a serious technical project needs: guides, examples, starter projects, and a cleaner path from evaluation to implementation.
{{< /timelineItem >}}

{{< timelineItem icon="route" header="Ecosystem Expansion" subheader="Routing + companion crates" >}}
The ecosystem is extending beyond the core solver. `solverforge-maps` adds road-network loading, travel-time matrices, route geometry, and routing diagnostics for vehicle-routing applications.
{{< /timelineItem >}}

{{< timelineItem icon="globe" header="Next Layer" subheader="Bindings and broader interfaces" >}}
Python remains a meaningful future expansion path, but the present story is already compelling without it: the Rust ecosystem stands on its own as a usable optimization platform.
{{< /timelineItem >}}

{{< /timeline >}}

---

## Why it matters

The interesting part of SolverForge is not just that it is written in Rust. It is that the project treats optimization as a software engineering problem, not only a mathematical one.

That shows up in a few ways:

- **Readable domain modeling** instead of flattening everything into equations first
- **Typed, explicit APIs** that keep business objects recognizable
- **Incremental scoring** and solver telemetry designed for real application feedback loops
- **A growing ecosystem surface** that includes docs, scaffolding, quickstarts, and routing infrastructure

This makes SolverForge a better signal of how I think about technical products: not just core algorithms, but the surrounding system required to make difficult software legible and usable.

---

## Tech Stack

{{< keywordList >}}
{{< keyword icon="code" >}} Rust {{< /keyword >}}
{{< keyword icon="code" >}} Constraint Streams {{< /keyword >}}
{{< keyword icon="code" >}} SERIO Incremental Scoring {{< /keyword >}}
{{< keyword icon="code" >}} Cargo / crates.io {{< /keyword >}}
{{< keyword icon="route" >}} solverforge-maps {{< /keyword >}}
{{< /keywordList >}}

---

## Links

{{< button href="https://solverforge.org" target="_blank" >}}
{{< icon "globe" >}} Website
{{< /button >}}

{{< button href="https://github.com/SolverForge/solverforge" target="_blank" >}}
{{< icon "github" >}} Core Repository
{{< /button >}}

{{< button href="https://github.com/SolverForge/solverforge-quickstarts" target="_blank" >}}
{{< icon "book" >}} Quickstarts
{{< /button >}}

{{< button href="https://github.com/SolverForge/solverforge-cli" target="_blank" >}}
{{< icon "terminal" >}} CLI Scaffolding
{{< /button >}}

{{< button href="https://github.com/SolverForge/solverforge-maps" target="_blank" >}}
{{< icon "route" >}} Routing Infrastructure
{{< /button >}}

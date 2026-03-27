 ---
title: "SolverForge"
date: 2025-12-07
draft: false
description: "A native constraint solver written in Rust with Python bindings"
tags: ["Python", "Rust", "Optimization", "SolverForge", "PyO3"]
showHero: false
showTableOfContents: true
---

{{< lead >}}
A native constraint solver written from scratch in Rust, inspired by [Timefold](https://timefold.ai). Features a zero-erasure architecture with monomorphization and arena allocation for maximum performance.
{{< /lead >}}

## What it solves

[SolverForge](https://www.solverforge.org) tackles complex optimization problems—employee scheduling, vehicle routing, resource allocation—by finding optimal assignments against real-world constraints.

{{< keywordList >}}
{{< keyword icon="calendar" >}} Scheduling {{< /keyword >}}
{{< keyword icon="truck" >}} Routing {{< /keyword >}}
{{< keyword icon="cube" >}} Resource Allocation {{< /keyword >}}
{{< /keywordList >}}

---

## Architecture

### Legacy: Python + JPype (Production)

The production solver uses [JPype](https://jpype.readthedocs.io/en/latest/) for direct in-process JVM access. Python bytecode is translated to Java bytecode at runtime via the [JPyInterpreter](https://github.com/SolverForge/solverforge-legacy/tree/main/jpyinterpreter), enabling constraint callbacks. Input data types are validated at the API boundary via [Pydantic](https://docs.pydantic.dev/latest/).

{{< mermaid >}}
graph TD
    A["Python Model"]

    A --> B["JPype Bridge"]
    B --> C["JPyInterpreter"]
    C --> D["Java Bytecode"]
    D --> E["Timefold Solver"]
    E -.->|callbacks| B
{{< /mermaid >}}

### Native: Rust Core (In Development)

The new architecture is a complete native solver written from scratch in Rust. It uses monomorphization for zero-cost constraint abstractions, arena allocation for cache-friendly memory access, and a zero-erasure design that preserves full type information at runtime.

{{< mermaid >}}
graph TD
    A["Python Model"]

    A --> B["PyO3 Bindings"]
    B --> C["Rust Core"]
    C --> D["Monomorphized Constraints"]
    D --> E["Arena Allocator"]
    E --> F["Incremental Score Calculator"]
    F --> G["Metaheuristic Solver"]
{{< /mermaid >}}

{{< alert icon="lightbulb" >}}
**Why native?** Unlike Java's type erasure, Rust's monomorphization generates specialized code for each constraint type at compile time. Combined with arena allocation, this eliminates runtime overhead from dynamic dispatch and heap fragmentation — delivering predictable, near-optimal performance.
{{< /alert >}}

---

## Project Timeline

{{< timeline >}}

{{< timelineItem icon="code" header="Continuity" subheader="SolverForge (Legacy)" >}}
Providing active maintenance the production-ready Python solver after Timefold deprecated official support.
{{< /timelineItem >}}

{{< timelineItem icon="shield" header="Rust Core" subheader="SolverForge" >}}
Building a native constraint solver with monomorphization and arena allocation for zero-overhead performance.
{{< /timelineItem >}}

{{< timelineItem icon="globe" header="Multi-language Support" subheader="PyO3 Bindings" >}}
Python bindings via PyO3, exposing the native solver with idiomatic Python APIs.
{{< /timelineItem >}}

{{< /timeline >}}

---

## Tech Stack

{{< keywordList >}}
{{< keyword icon="code" >}} Rust {{< /keyword >}}
{{< keyword icon="code" >}} Python {{< /keyword >}}
{{< keyword icon="code" >}} PyO3 {{< /keyword >}}
{{< /keywordList >}}

---

## Links

{{< button href="https://www.solverforge.org" target="_blank" >}}
{{< icon "globe" >}} Website
{{< /button >}}

{{< button href="https://github.com/SolverForge" target="_blank" >}}
{{< icon "github" >}} GitHub
{{< /button >}}

{{< button href="https://pypi.org/project/solverforge-legacy/" target="_blank" >}}
{{< icon "code" >}} PyPI
{{< /button >}}

{{< button href="https://huggingface.co/spaces/SolverForge/" target="_blank" >}}
{{< icon "wand-magic-sparkles" >}} HuggingFace (Rust Demos)
{{< /button >}}

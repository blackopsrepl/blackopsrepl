 ---
title: "SolverForge"
date: 2025-12-07
draft: false
description: "An open-source optimization framework for Rust and Python"
tags: ["Python", "Rust", "WASM", "Optimization", "SolverForge", "Timefold"]
showHero: false
showTableOfContents: true
---

{{< lead >}}
An open-source AI constraint solver I'm building to continue [Timefold](https://timefold.ai)'s [discontinued Python project](https://github.com/TimefoldAI/timefold-solver/discussions/1698#discussioncomment-13842196).
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

### Next-Gen: Rust + WASM/HTTP (In Development)

The new architecture decouples language bindings from the solver via HTTP. Constraints compile to WebAssembly via the [timefold-wasm-service](https://github.com/SolverForge/timefold-wasm-service) module, enabling language-agnostic support and sandboxed execution.

{{< mermaid >}}
graph TD
    A["Language Binding"]

    A --> B["Rust Core"]
    B --> C["WASM Generator"]
    C -->|HTTP| D["Quarkus Service"]
    D --> E["Chicory WASM"]
    D --> F["Class Generator"]
    F --> G["Timefold Solver"]
    G -.->|execute| E
{{< /mermaid >}}

{{< alert icon="lightbulb" >}}
**Why the change?** JPype requires tight Python-JVM coupling and presents significant overhead, due to runtime type validation for every Pydantic operation. The WASM/HTTP approach guarantees near-native speed and enables Python, Go, C# — any language with a `LanguageBridge` implementation.
{{< /alert >}}

---

## Project Timeline

{{< timeline >}}

{{< timelineItem icon="code" header="Continuity" subheader="SolverForge (Legacy)" >}}
Providing active maintenance the production-ready Python solver after Timefold deprecated official support.
{{< /timelineItem >}}

{{< timelineItem icon="shield" header="Rust Core" subheader="Solverforge" >}}
Building a Rust-native language bridge with WASM compilation for browser and edge deployment.
{{< /timelineItem >}}

{{< timelineItem icon="globe" header="Multi-language Support" subheader="LanguageBridge Trait" >}}
Python via PyO3 first - with architecture supporting Go, C# and more.
{{< /timelineItem >}}

{{< /timeline >}}

---

## Tech Stack

{{< keywordList >}}
{{< keyword icon="code" >}} Rust {{< /keyword >}}
{{< keyword icon="code" >}} Python {{< /keyword >}}
{{< keyword icon="code" >}} WebAssembly {{< /keyword >}}
{{< keyword icon="server" >}} Timefold JVM {{< /keyword >}}
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

{{< button href="https://huggingface.co/spaces/solverforge/" target="_blank" >}}
{{< icon "wand-magic-sparkles" >}} HuggingFace
{{< /button >}}

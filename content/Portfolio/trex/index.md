---
title: "trex"
date: 2025-12-01
draft: false
description: "A fast, minimal tmux session manager with fuzzy finding and an interactive TUI. Written in Rust."
tags: ["Rust", "CLI", "TUI", "Developer Tools"]
showHero: false
showTableOfContents: true
---

{{< lead >}}
A fast, minimal tmux session manager with fuzzy finding and an interactive TUI. Written in Rust with vim-like keybindings.
{{< /lead >}}

## Features

{{< keywordList >}}
{{< keyword icon="code" >}} Interactive TUI {{< /keyword >}}
{{< keyword icon="search" >}} Fuzzy Finding {{< /keyword >}}
{{< keyword icon="edit" >}} Vim Keybindings {{< /keyword >}}
{{< /keywordList >}}

---

## What it does

{{< timeline >}}

{{< timelineItem icon="list" header="Session Management" subheader="Browse & Control" >}}
Create, attach, delete, and detach tmux sessions with simple keyboard shortcuts.
{{< /timelineItem >}}

{{< timelineItem icon="search" header="Fuzzy Search" subheader="Powered by nucleo" >}}
Quickly filter sessions and directories with fuzzy matching across thousands of entries.
{{< /timelineItem >}}

{{< timelineItem icon="lightbulb" header="Smart Selection" subheader="Context Aware" >}}
Automatically preselects sessions matching your current working directory.
{{< /timelineItem >}}

{{< /timeline >}}

---

## Architecture

{{< mermaid >}}
graph TD
    A["trex CLI"]

    A --> B["TUI Module"]
    A --> C["tmux Integration"]
    A --> D["Directory Discovery"]

    B --> E["ratatui"]
    B --> F["nucleo fuzzy"]
    C --> G["Session CRUD"]
    D --> H["Depth 1-6"]
{{< /mermaid >}}

---

## Highlights

{{< alert icon="fire" >}}
**Single binary, zero config** - Just run `trex` and start managing sessions. No configuration files needed.
{{< /alert >}}

- Directory discovery with configurable depth (1-6 levels)
- Static binary builds for universal Linux compatibility
- Clean architecture: TUI, tmux integration, and directory modules

---

## Tech Stack

{{< keywordList >}}
{{< keyword icon="code" >}} Rust {{< /keyword >}}
{{< keyword icon="code" >}} ratatui {{< /keyword >}}
{{< keyword icon="code" >}} crossterm {{< /keyword >}}
{{< keyword icon="code" >}} nucleo {{< /keyword >}}
{{< /keywordList >}}

---

## Links

{{< button href="https://github.com/blackopsrepl/trex" target="_blank" >}}
{{< icon "github" >}} GitHub
{{< /button >}}

{{< button href="https://github.com/blackopsrepl/trex/releases" target="_blank" >}}
{{< icon "download" >}} Releases
{{< /button >}}
